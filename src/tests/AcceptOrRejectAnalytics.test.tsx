import '@testing-library/jest-dom';

import { h } from 'preact';
import { render, testWindow } from './utils/render';
import { test, expect, describe } from '@jest/globals';

import { AcceptOrRejectAnalytics } from '../components/AcceptOrRejectAnalytics';
import { fireEvent } from '@testing-library/preact';
import { MOCK_PURPOSES_OPTED_IN, MOCK_PURPOSES_OPTED_OUT } from './utils/constants';
import { init as initMockAirgap } from './utils/ag-mock'
import { messages } from '../messages';

describe('AcceptOrRejectAnalytics', () => {
  test('matches snapshot', () => {
    const { snapshot } = render(<AcceptOrRejectAnalytics handleSetViewState={() => null} />);
    expect(snapshot).toMatchSnapshot();
  });

  test('button ordering is consistent', () => {
    initMockAirgap(MOCK_PURPOSES_OPTED_OUT);
    const { container } = render(<AcceptOrRejectAnalytics handleSetViewState={() => null} />);

    const domLabels = [...container.querySelectorAll('button')]
      ?.map((span) =>
        span.children[0].childNodes.item(0).textContent
      )

    expect(domLabels).toStrictEqual([
      messages.acceptAnalytics.defaultMessage,
      messages.rejectAnalytics.defaultMessage,
    ]);
  });

  test('submission affects stored consent (opted out)', () => {
    initMockAirgap(MOCK_PURPOSES_OPTED_OUT);
    const prevConsent = { ...testWindow.airgap.getConsent() };
    const { container } = render(<AcceptOrRejectAnalytics handleSetViewState={() => null} />);

    // Ensure submission reflects purpose selection in airgap
    const acceptButton = container.querySelector('button');
    if (acceptButton) fireEvent.click(acceptButton);

    const consent = { ...testWindow.airgap.getConsent() };

    expect(!!prevConsent.purposes?.Analytics).toEqual(!consent.purposes?.Analytics);
    expect(prevConsent.confirmed).toEqual(false);
    expect(consent.confirmed).toEqual(true);
  });

  test('submission affects stored consent (opted in)', () => {
    initMockAirgap(MOCK_PURPOSES_OPTED_IN);
    const prevConsent = { ...testWindow.airgap.getConsent() };
    const { container } = render(<AcceptOrRejectAnalytics handleSetViewState={() => null} />);

    // Ensure submission reflects purpose selection in airgap
    const rejectButton = container.querySelector('button:nth-of-type(2)');
    if (rejectButton) fireEvent.click(rejectButton);

    const consent = { ...testWindow.airgap.getConsent() };

    expect(!!prevConsent.purposes?.Analytics).toEqual(!consent.purposes?.Analytics);
    expect(prevConsent.confirmed).toEqual(false);
    expect(consent.confirmed).toEqual(true);
  });
});
