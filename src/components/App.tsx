import { h, JSX } from 'preact';
import { IntlProvider as _IntlProvider } from 'react-intl';
import type {
  AirgapAPI,
  ConsentManagerAPI,
} from '@transcend-io/airgap.js-types';
import { getMergedConfig } from '../config';
import {
  AirgapProvider,
  ConfigProvider,
  useLanguage,
  useViewState,
} from '../hooks';
import { settings } from '../settings';
import { Main } from './Main';
import { getPrimaryRegime } from '../regimes';

import { ConsentManagerLanguageKey } from '@transcend-io/internationalization';

import { CONSENT_MANAGER_SUPPORTED_LANGUAGES } from '../i18n';
import { makeConsentManagerAPI } from '../api';
import { TranscendEventTarget } from '../event-target';

// TODO: https://transcend.height.app/T-13483
// Fix IntlProvider JSX types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IntlProvider = _IntlProvider as any;

// Create `transcend` eventTarget on the global scope so this isn't derefenced on the next render of App
const eventTarget = new TranscendEventTarget();

/**
 * Top layer concerned with data, not presentation
 */
export function App({
  airgap,
  callback,
}: {
  /** The Airgap API */
  airgap: AirgapAPI;
  /** A callback which passes the consent manager API out of Preact to be exposed on `window.transcend` */
  callback: (finalizedConsentManagerAPI: ConsentManagerAPI) => void;
}): JSX.Element {
  // Consent manager configuration
  const config = getMergedConfig();

  // Get the active privacy regime
  const privacyRegime = getPrimaryRegime(airgap.getRegimes());

  // Get default view states
  const { initialViewStateByPrivacyRegime, dismissedViewState } = config;
  const initialViewState =
    initialViewStateByPrivacyRegime[
      privacyRegime as keyof typeof initialViewStateByPrivacyRegime
    ] || 'Hidden';

  // View state controller. Defaults based on regime and config.
  const { viewState, firstSelectedViewState, handleSetViewState, auth } =
    useViewState({
      initialViewState,
      dismissedViewState,
      eventTarget,
    });

  // Language setup
  const { language, handleChangeLanguage, messages } = useLanguage({
    supportedLanguages: CONSENT_MANAGER_SUPPORTED_LANGUAGES,
    translationsLocation:
      // Order of priority:
      // 1. Take airgap.js data-messages
      // 2. Take consentManagerConfig.messages
      // 3. Look for translations locally
      settings.messages || config.messages || './translations',
  });

  // Create the `transcend` API
  const consentManagerAPI = makeConsentManagerAPI({
    eventTarget,
    viewState,
    handleChangeLanguage,
    handleSetViewState,
    airgap,
  });

  // Send this API up and out of Preact via this callback
  callback(consentManagerAPI);

  return (
    <IntlProvider
      locale={language}
      messages={messages || {}}
      // messages.ts are translated in english
      defaultLocale={ConsentManagerLanguageKey.En}
    >
      <ConfigProvider newConfig={config}>
        <AirgapProvider newAirgap={airgap}>
          {/** Ensure messages are loaded before any UI is displayed */}
          {messages ? (
            <Main
              airgap={airgap}
              modalOpenAuth={auth}
              viewState={viewState}
              supportedLanguages={CONSENT_MANAGER_SUPPORTED_LANGUAGES}
              firstSelectedViewState={firstSelectedViewState}
              handleSetViewState={handleSetViewState}
              handleChangeLanguage={handleChangeLanguage}
            />
          ) : null}
        </AirgapProvider>
      </ConfigProvider>
    </IntlProvider>
  );
}
