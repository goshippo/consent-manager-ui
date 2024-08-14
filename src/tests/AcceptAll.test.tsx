import '@testing-library/jest-dom';

import { h } from 'preact';
import { render, testWindow } from './utils/render';
import { test, expect, describe, beforeEach } from '@jest/globals';

import { AcceptAll } from '../components/AcceptAll';
import { fireEvent } from '@testing-library/preact';
import { MOCK_PURPOSES_OPTED_OUT } from './utils/constants';
import { init as initMockAirgap } from './utils/ag-mock'

describe('AcceptAll', () => {
  beforeEach(() => {
    initMockAirgap(MOCK_PURPOSES_OPTED_OUT);
  });

  test('matches snapshot', () => {
    const { snapshot } = render(<AcceptAll handleSetViewState={() => null} />);
    expect(snapshot).toMatchSnapshot();
  });

  test('submission affects stored consent', () => {
    const prevConsent = { ...testWindow.airgap.getConsent() };
    const { container } = render(<AcceptAll handleSetViewState={() => null} />);

    // Ensure submission reflects purpose selection in airgap
    const submitButton = container.querySelector('button');
    if (submitButton) fireEvent.click(submitButton);

    const consent = { ...testWindow.airgap.getConsent() };

    Object.entries(MOCK_PURPOSES_OPTED_OUT).forEach(([, purpose]) => {
      expect(!!prevConsent.purposes?.[purpose.name]).toEqual(!consent.purposes?.[purpose.name]);
    });
    expect(prevConsent.confirmed).toEqual(false);
    expect(consent.confirmed).toEqual(true);
  });
});
