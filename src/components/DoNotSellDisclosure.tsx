// external
import { h, JSX } from 'preact';
import { useIntl } from 'react-intl';
import { AirgapAuth, Purpose } from '@transcend-io/airgap.js-types';
import { useEffect, useState } from 'preact/hooks';

// global
import { noticeAndDoNotSellMessages } from '../messages';
import type { HandleSetViewState, NavigatorWithGPC } from '../types';
import { useAirgap } from '../hooks';

// local
import Button from './Button';
import ColumnContent from './ColumnContent';
import Title from './Title';
import Paragraph from './Paragraph';

/**
 * Component showing acknowledgement of do not sell
 */
export default function DoNotSellDisclosure({
  handleSetViewState,
  modalOpenAuth,
}: {
  /** Authentication for opening the airgap modal */
  modalOpenAuth: AirgapAuth;
  /** Function to change viewState */
  handleSetViewState: HandleSetViewState;
}): JSX.Element {
  const { airgap } = useAirgap();
  const { formatMessage } = useIntl();

  // don't render success unless opt out occurs
  const [isOptedOut, setIsOptedOut] = useState(false);

  const handleOptOut = (event: AirgapAuth): void => {
    // Confirm current consent
    airgap.setConsent(event, {
      [Purpose.SaleOfInfo]: false,
    });
  };

  const handleConfirm = (): void => {
    handleSetViewState('close');
  };

  const { globalPrivacyControl } = navigator as NavigatorWithGPC;

  // opt the user out on modal open
  useEffect(() => {
    handleOptOut(modalOpenAuth);
    setIsOptedOut(true);
  }, []);

  // delay UI until opt out happens
  if (!isOptedOut) {
    return <div />;
  }
  return (
    <ColumnContent>
      <div>
        <div>
          <Title align="left">
            {formatMessage(
              globalPrivacyControl
                ? noticeAndDoNotSellMessages.doNotSellHonoredGpc
                : noticeAndDoNotSellMessages.doNotSellHonored,
            )}
          </Title>
        </div>
        <div>
          <Paragraph>
            {formatMessage(
              noticeAndDoNotSellMessages.doNotSellHonoredDescription,
            )}
          </Paragraph>
        </div>
      </div>
      <Button
        primaryText={formatMessage(
          noticeAndDoNotSellMessages.confirmButtonPrimary,
        )}
        handleClick={handleConfirm}
      />
    </ColumnContent>
  );
}
