import { h, JSX } from 'preact';
import type {
  AirgapAPI,
  AirgapAuth,
  ConsentManagerConfig,
  ViewState,
} from '@transcend-io/airgap.js-types';
import { ConsentManagerLanguageKey } from '@transcend-io/internationalization';
import { isResponseViewState, isViewStateClosed } from '../hooks';
import type { HandleSetViewState } from '../types';
import { Collapsed } from './Collapsed';
import { AcceptAll } from './AcceptAll';
import { BottomMenu } from './BottomMenu';
import { CompleteOptions } from './CompleteOptions';
import { LanguageButton } from './LanguageButton';
import { LanguageOptions } from './LanguageOptions';
import { CompleteOptionsInverted } from './CompleteOptionsInverted';
import { TranscendLogo } from './TranscendLogo';
import { NoticeAndDoNotSell } from './NoticeAndDoNotSell';
import { QuickOptions } from './QuickOptions';
import { OptOutDisclosure } from './OptOutDisclosure';
import { AcceptOrRejectAdvertising } from './AcceptOrRejectAdvertising';
import { AcceptOrRejectAll } from './AcceptOrRejectAll';
import { DoNotSellDisclosure } from './DoNotSellDisclosure';
import { AcceptOrRejectAnalytics } from './AcceptOrRejectAnalytics';
import { DoNotSellExplainer } from './DoNotSellExplainer';
import { QuickOptions3 } from './QuickOptions3';
import { PrivacyPolicyNotice } from './PrivacyPolicyNotice';
import { PrivacyPolicyNoticeWithCloseButton } from './PrivacyPolicyNoticeWithCloseButton';
import { AcceptAllOrMoreChoices } from './AcceptAllOrMoreChoices';
import { AcceptOrRejectAllOrMoreChoices } from './AcceptOrRejectAllOrMoreChoices';
import { AcceptAllRejectAllToggle } from './AcceptAllRejectAllToggle';
import { useEffect, useRef } from 'preact/hooks';
import { CompleteOptionsToggles } from './CompleteOptionsToggles';
import { useIntl } from 'react-intl';
import { messages } from '../messages';
import { initialFocusElement } from '../helpers';

/**
 * Presents view states (collapsed, GDPR-mode, CCPA-mode etc)
 */
export function Main({
  airgap,
  viewState,
  config,
  firstSelectedViewState,
  handleSetViewState,
  handleChangeLanguage,
  supportedLanguages,
  modalOpenAuth,
}: {
  /** airgap.js API */
  airgap: AirgapAPI;
  /** Configuration for consent UI */
  config: ConsentManagerConfig;
  /** The on click event passed as authentication to airgap. Needed for do-not-sell acknowledgement */
  modalOpenAuth?: AirgapAuth;
  /** The current viewState of the consent manager */
  viewState: ViewState;
  /** First view state selected when transcend.showConsentManager() is called */
  firstSelectedViewState: ViewState | null;
  /** Updater function for viewState */
  handleSetViewState: HandleSetViewState;
  /** Updater function for language change */
  handleChangeLanguage: (language: ConsentManagerLanguageKey) => void;
  /** Set of supported languages */
  supportedLanguages: ConsentManagerLanguageKey[];
}): JSX.Element {
  const { formatMessage } = useIntl();
  // need to focus the element marked with data-initialFocus when the modal is opened
  // regular autofocus attributes caused errors, thus the data attribute usage
  // NOTE: if we want to meet a11y guidelines we will need to implement a focus trap as well
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isViewStateClosed(viewState) && dialogRef.current) {
      // This setTimeout was necessary for the api triggered states, (DoNotSell|OptOut)Disclosure
      setTimeout(() => {
        if (dialogRef.current) initialFocusElement(dialogRef.current);
      }, 0);
    }
  }, [viewState, dialogRef]);

  // Modal open views
  if (!isViewStateClosed(viewState)) {
    if (!isResponseViewState(viewState) && !airgap.getConsent().prompted) {
      airgap.setPrompted(true);
    }
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={formatMessage(messages.modalAriaLabel)}
        aria-live="polite"
        className="modal-container"
        id="consentManagerMainDialog"
        ref={dialogRef}
      >
        <div class="modal-container-top">
            {viewState === 'CompleteOptions' && (
              <svg 
                onClick={() => handleSetViewState(firstSelectedViewState)}
                class="pointer"
                fill="#000000" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 2">
                <g data-name="arrow-ios-back">
                <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/>
                <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
                </g>
                </g>
              </svg>
            )}
            {viewState != 'CompleteOptions' && (
              <svg height="20" alt="Shippo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 31" fill="#1b1d1d"><path d="M42.933 25.894a11.53 11.53 0 0 1-2.435-.257c-.763-.157-1.493-.452-2.156-.873-.639-.414-1.178-.975-1.573-1.639-.413-.684-.562-1.73-.569-1.775a.94.94 0 0 1 .205-.755.88.88 0 0 1 .695-.317h2.182c.538.012.992.417 1.082.965.013.03.051.109.145.278a2.02 2.02 0 0 0 .582.663 2.58 2.58 0 0 0 .842.391c.336.088.681.132 1.027.131a3.74 3.74 0 0 0 .793-.092 2.6 2.6 0 0 0 .727-.278 1.59 1.59 0 0 0 .518-.475c.136-.211.203-.461.191-.714 0-.173 0-.697-.969-1.074-.742-.287-2.438-.704-2.455-.708l-1.427-.357c-.016 0-.409-.105-.942-.284a5.78 5.78 0 0 1-1.487-.732 3.61 3.61 0 0 1-1.091-1.178 3.47 3.47 0 0 1-.418-1.75c0-.979.182-1.797.567-2.442a4.25 4.25 0 0 1 1.489-1.502 6.22 6.22 0 0 1 2.031-.761 12.06 12.06 0 0 1 2.267-.214 11.03 11.03 0 0 1 2.255.229 6.02 6.02 0 0 1 2 .791 4.75 4.75 0 0 1 1.478 1.502c.274.489.466 1.023.567 1.578a.91.91 0 0 1-.18.758.85.85 0 0 1-.689.321h-2.182a1.28 1.28 0 0 1-1.187-.939c-.088-.27-.269-.497-.509-.639a3.47 3.47 0 0 0-1.656-.376 5.84 5.84 0 0 0-.673.041c-.21.02-.415.074-.609.158a1.14 1.14 0 0 0-.415.323c-.111.151-.165.339-.153.528a.81.81 0 0 0 .287.65 2.62 2.62 0 0 0 .893.49 11.94 11.94 0 0 0 1.362.376l1.6.364a16.06 16.06 0 0 1 1.66.483 5.61 5.61 0 0 1 1.489.777 3.81 3.81 0 0 1 1.078 1.234c.291.562.434 1.192.415 1.829.068 1.683-.747 3.274-2.133 4.162a6.09 6.09 0 0 1-2.133.862 11.84 11.84 0 0 1-2.387.246zm18.391-.357c-.556 0-1.007-.466-1.007-1.04v-6.639l-.066-1.486c-.031-.349-.167-1.352-.433-1.784-.309-.503-.86-.751-1.686-.751-.964 0-1.636.278-2.051.849-.346.475-.535 1.799-.578 2.271l-.069 1.484v6.047c0 .575-.451 1.04-1.007 1.04h-2.364c-.556-.001-1.006-.466-1.007-1.04V6.082c.001-.574.451-1.039 1.007-1.04h2.364c.556 0 1.007.466 1.007 1.04v6.038l.046-.058c.029-.037.702-.909 1.505-1.315a5.19 5.19 0 0 1 2.335-.601c1.058 0 1.946.154 2.633.456a4.04 4.04 0 0 1 1.665 1.288 5.06 5.06 0 0 1 .847 1.981c.105.572.173 1.152.202 1.733l.034 1.525v7.36c-.001.575-.453 1.041-1.009 1.041l-2.369.006z"/><path d="M66.885 7.838c0 .575.451 1.04 1.007 1.04l2.373-.006c.556-.001 1.006-.466 1.007-1.04v-1.75a1.06 1.06 0 0 0-.299-.738c-.191-.195-.449-.304-.718-.302h-2.364c-.556 0-1.007.466-1.007 1.04v1.756zm0 16.658c0 .575.451 1.04 1.007 1.04l2.373-.006c.556-.001 1.006-.466 1.007-1.041v-12.91a1.06 1.06 0 0 0-.299-.739c-.191-.195-.449-.304-.718-.302h-2.364c-.556 0-1.007.466-1.007 1.04v12.917zm6.57 5.045c0 .575.451 1.041 1.007 1.042l2.364.008c.557-.001 1.007-.467 1.007-1.042v-5.394l.06.069a5.1 5.1 0 0 0 1.396 1.106 5.59 5.59 0 0 0 2.511.563 5.92 5.92 0 0 0 2.815-.644 6.05 6.05 0 0 0 2.009-1.726 7.54 7.54 0 0 0 1.195-2.466 10.61 10.61 0 0 0 .389-2.87 11.65 11.65 0 0 0-.389-3.02 7.63 7.63 0 0 0-1.206-2.575 6.26 6.26 0 0 0-2.064-1.782 6.18 6.18 0 0 0-2.964-.674 5.61 5.61 0 0 0-2.495.563 4.82 4.82 0 0 0-1.411 1.196l-.029.037v-.355c0-.575-.451-1.04-1.007-1.04h-2.182c-.556.001-1.006.466-1.007 1.04v17.962zm5.863-15.473a2.63 2.63 0 0 1 1.435-.363 2.58 2.58 0 0 1 1.409.363c.385.245.711.578.953.973a4.32 4.32 0 0 1 .545 1.399 8.02 8.02 0 0 1 .171 1.643 8.55 8.55 0 0 1-.158 1.645c-.087.485-.261.949-.515 1.367a2.87 2.87 0 0 1-.936.939c-1.322.708-2.947.308-3.818-.939a4.2 4.2 0 0 1-.529-1.371 7.95 7.95 0 0 1-.169-1.641c-.001-.562.052-1.123.156-1.675a4.19 4.19 0 0 1 .516-1.382c.238-.389.56-.717.94-.958zm9.969 15.473c0 .575.451 1.041 1.007 1.042l2.371.008c.557-.001 1.007-.467 1.007-1.042v-5.394l.06.069a5.07 5.07 0 0 0 1.396 1.106c.784.381 1.642.574 2.509.563a5.93 5.93 0 0 0 2.824-.653 6.04 6.04 0 0 0 2-1.726 7.5 7.5 0 0 0 1.194-2.466 10.57 10.57 0 0 0 .39-2.87c.002-1.02-.128-2.036-.388-3.02-.241-.927-.651-1.798-1.209-2.565a6.22 6.22 0 0 0-2.062-1.782 6.19 6.19 0 0 0-2.963-.674 5.62 5.62 0 0 0-2.496.563 4.83 4.83 0 0 0-1.415 1.196l-.029.038v-.355c-.001-.574-.451-1.039-1.007-1.04h-2.182c-.556 0-1.007.466-1.007 1.04v17.962zm5.861-15.473a2.64 2.64 0 0 1 1.436-.362 2.59 2.59 0 0 1 1.416.357c.382.249.704.583.944.978.261.429.446.903.546 1.399a8.01 8.01 0 0 1 .169 1.643 8.73 8.73 0 0 1-.156 1.645 3.99 3.99 0 0 1-.516 1.367c-.82 1.316-2.501 1.726-3.804.928a2.81 2.81 0 0 1-.947-.928 4.2 4.2 0 0 1-.529-1.371 7.93 7.93 0 0 1-.171-1.641 8.74 8.74 0 0 1 .158-1.675c.088-.49.263-.958.516-1.382a2.95 2.95 0 0 1 .938-.958zm14.269 11.281a8.24 8.24 0 0 0 3.071.545c1.052.015 2.097-.169 3.084-.545a6.64 6.64 0 0 0 2.376-1.591 7.11 7.11 0 0 0 1.52-2.485c.365-1.033.545-2.125.531-3.225.015-1.104-.164-2.201-.527-3.24-.655-1.889-2.079-3.385-3.896-4.094a8.67 8.67 0 0 0-6.159 0c-1.811.716-3.229 2.213-3.883 4.098a9.41 9.41 0 0 0-.531 3.24 9.28 9.28 0 0 0 .531 3.225 7.13 7.13 0 0 0 1.52 2.485 6.65 6.65 0 0 0 2.363 1.587zm.646-10.335c.514-.866 1.446-1.37 2.427-1.315v.006a2.84 2.84 0 0 1 1.495.363 2.86 2.86 0 0 1 .962.952 4.19 4.19 0 0 1 .516 1.386 8.66 8.66 0 0 1 .156 1.647 8.43 8.43 0 0 1-.156 1.632c-.092.49-.268.959-.518 1.386a2.7 2.7 0 0 1-.957.939 2.91 2.91 0 0 1-1.498.353 2.85 2.85 0 0 1-1.482-.351 2.74 2.74 0 0 1-.945-.95c-.25-.427-.426-.896-.518-1.386a8.51 8.51 0 0 1-.157-1.632 8.75 8.75 0 0 1 .157-1.647 4.1 4.1 0 0 1 .518-1.382zM29.818 6.826c.865.695 1.539 1.612 1.956 2.659.382.935.546 1.949.48 2.962a6 6 0 0 1-.866 2.704c-.529.849-1.253 1.55-2.107 2.041a13.94 13.94 0 0 1-1.476.678l-1.378.667c-1.049.546-2.055 1.157-3.049 1.792l-3.206 2.165c-.769.543-3.395 4.498-4.702 6.511 5.978-.259 11.036-4.646 12.318-10.682l.171-.075.281-.12.094-.04c.392-.154.773-.334 1.142-.539a5.3 5.3 0 0 0 .242-.152c-.902 7.171-6.509 12.729-13.482 13.366S2.798 26.943.693 20.047 1.406 5.67 7.471 2.06 21.216-.321 25.938 5.018h-.182a7.2 7.2 0 0 0-1.182.098 6.79 6.79 0 0 0-.833.188C19.913 1.743 14.426.814 9.698 2.927s-7.831 6.878-7.94 12.198c1.56-.511 4.269-1.435 4.584-1.769.671-.714 1.342-1.433 1.971-2.184a6.32 6.32 0 0 0 .533-.695c.05-.081.09-.167.122-.257a2.68 2.68 0 0 1 .413-.734 4.6 4.6 0 0 1-.213-.684 2.17 2.17 0 0 1-.182-.543c-.112-.48-.152-.976-.118-1.469.029-.4.147-1.014.651-1.014a.92.92 0 0 1 .456.21 8.44 8.44 0 0 1 1.411 1.196h.047l1.611-.188a10.37 10.37 0 0 1 2.015-.107c.294.028.584.091.864.188a9.1 9.1 0 0 0 .884.248 7.44 7.44 0 0 0 1.729.188 6.27 6.27 0 0 0 3.167-.939l.381-.172.565-.254a8.29 8.29 0 0 1 2-.633 6.69 6.69 0 0 1 2.011-.032 6.52 6.52 0 0 1 3.16 1.345zm-14.221 4.657c.474.3 1.076.277 1.527-.058.429-.344.591-.936.4-1.461-.201-.541-.699-.903-1.26-.915a1.3 1.3 0 0 0-1.2.749l.034-.099s-.028.08-.065.169a1.39 1.39 0 0 1 .031-.071l-.033.098c-.105.317-.06.192-.003.037l.003-.008c-.02.057-.036.115-.047.175a1.37 1.37 0 0 0 .613 1.384z"/></svg>
            )}
        </div>
        <div role="document" className="modal-container-inner" tabIndex={0}>
          <div
            role="main"
            className="inner-container"
            aria-description={formatMessage(messages.modalAriaDescription)}
          >
            {viewState === 'QuickOptions' && (
              <QuickOptions handleSetViewState={handleSetViewState} />
            )}

            {viewState === 'AcceptAll' && (
              <AcceptAll handleSetViewState={handleSetViewState} />
            )}

            {viewState === 'AcceptOrRejectAnalytics' && (
              <AcceptOrRejectAnalytics
                handleSetViewState={handleSetViewState}
              />
            )}
            {viewState === 'AcceptOrRejectAdvertising' && (
              <AcceptOrRejectAdvertising
                handleSetViewState={handleSetViewState}
              />
            )}

            {viewState === 'DoNotSellExplainer' && (
              <DoNotSellExplainer
                handleSetViewState={handleSetViewState}
                fontColor={config.theme.fontColor}
              />
            )}

            {viewState === 'CompleteOptionsToggles' && (
              <CompleteOptionsToggles
                handleSetViewState={handleSetViewState}
                fontColor={config.theme.fontColor}
              />
            )}

            {viewState === 'QuickOptions3' && (
              <QuickOptions3 handleSetViewState={handleSetViewState} />
            )}

            {viewState === 'PrivacyPolicyNotice' && (
              <PrivacyPolicyNotice handleSetViewState={handleSetViewState} />
            )}

            {viewState === 'PrivacyPolicyNoticeWithCloseButton' && (
              <PrivacyPolicyNoticeWithCloseButton
                handleSetViewState={handleSetViewState}
                fontColor={config.theme.fontColor}
              />
            )}

            {viewState === 'AcceptOrRejectAll' && (
              <AcceptOrRejectAll handleSetViewState={handleSetViewState} />
            )}

            {viewState === 'AcceptAllRejectAllToggle' && (
              <AcceptAllRejectAllToggle
                handleSetViewState={handleSetViewState}
                fontColor={config.theme.fontColor}
              />
            )}

            {viewState === 'AcceptAllOrMoreChoices' && (
              <AcceptAllOrMoreChoices handleSetViewState={handleSetViewState} />
            )}

            {viewState === 'AcceptOrRejectAllOrMoreChoices' && (
              <AcceptOrRejectAllOrMoreChoices
                handleSetViewState={handleSetViewState}
              />
            )}

            {viewState === 'DoNotSellDisclosure' && modalOpenAuth && (
              <DoNotSellDisclosure
                handleSetViewState={handleSetViewState}
                modalOpenAuth={modalOpenAuth}
              />
            )}

            {viewState === 'OptOutDisclosure' && modalOpenAuth && (
              <OptOutDisclosure
                handleSetViewState={handleSetViewState}
                modalOpenAuth={modalOpenAuth}
              />
            )}

            {viewState === 'CompleteOptions' && (
              <CompleteOptions handleSetViewState={handleSetViewState} />
            )}

            {viewState === 'CompleteOptionsInverted' && (
              <CompleteOptionsInverted
                handleSetViewState={handleSetViewState}
              />
            )}

            {viewState === 'NoticeAndDoNotSell' && (
              <NoticeAndDoNotSell handleSetViewState={handleSetViewState} />
            )}

            {viewState === 'LanguageOptions' && (
              <LanguageOptions
                handleSetViewState={handleSetViewState}
                handleChangeLanguage={handleChangeLanguage}
                supportedLanguages={supportedLanguages}
              />
            )}
          </div>
{/*          <div role="contentinfo" className="footer-container">
            <TranscendLogo fontColor={config.theme.fontColor} />
            <BottomMenu
              firstSelectedViewState={firstSelectedViewState}
              viewState={viewState}
              handleSetViewState={handleSetViewState}
              privacyPolicy={config.privacyPolicy}
              secondaryPolicy={config.secondaryPolicy}
            />
            <LanguageButton
              handleSetViewState={handleSetViewState}
              viewState={viewState}
              fontColor={config.theme.fontColor}
              supportedLanguages={supportedLanguages}
            />
          </div>
*/}        </div>
      </div>
    );
  }

  // Modal collapsed view
  if (
    viewState === 'Collapsed' &&
    (!firstSelectedViewState || !isViewStateClosed(firstSelectedViewState))
  ) {
    return <Collapsed handleSetViewState={handleSetViewState} />;
  }

  // Completely hidden
  return <div />;
}
