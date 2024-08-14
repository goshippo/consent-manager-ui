import '@testing-library/jest-dom';

import { h } from 'preact';
import { render, testWindow } from './utils/render';
import { test, expect, describe } from '@jest/globals';

import { PrivacyPolicyNotice } from '../components/PrivacyPolicyNotice';
import { MOCK_PURPOSES_OPTED_IN } from './utils/constants';
import { init as initMockAirgap } from './utils/ag-mock'
import { fireEvent } from '@testing-library/preact';

describe('PrivacyPolicyNotice', () => {
  test('matches snapshot', () => {
    const { snapshot } = render(<PrivacyPolicyNotice handleSetViewState={() => null} />);
    expect(snapshot).toMatchSnapshot();
  });

  test('confirms purposes on submission', () => {
    initMockAirgap(MOCK_PURPOSES_OPTED_IN);
    const prevConsent = { ...testWindow.airgap.getConsent() };
    const { container } = render(<PrivacyPolicyNotice handleSetViewState={() => null} />);

    // Ensure submission reflects purpose confirmation in airgap
    const submitButton = container.querySelector('button');
    if (submitButton) fireEvent.click(submitButton);

    const consent = { ...testWindow.airgap.getConsent() };
    Object.entries(MOCK_PURPOSES_OPTED_IN).forEach(([, purpose]) => {
      expect(!!prevConsent.purposes?.[purpose.name]).toEqual(!!consent.purposes?.[purpose.name]);
    });
    expect(prevConsent.confirmed).toEqual(false);
    expect(consent.confirmed).toEqual(true);
  });
});
