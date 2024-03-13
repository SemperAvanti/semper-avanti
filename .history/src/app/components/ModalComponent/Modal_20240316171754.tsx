'use client';

import './Modal.scss';

import Image from 'next/image';

interface Props {
  isEmailSentSuccessfully: boolean;
  sendedEmail: string;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal: React.FC<Props> = ({
  sendedEmail,
  isOpen,
  isEmailSentSuccessfully,
  closeModal,
}) => {
  const isError = isEmailSentSuccessfully ? 'Error' : 'Success';

  const modalInfo = error ? (
    <p className="modal__info">
      Email with the training info has{' '}
      <span className="modal__info-sub-text-error">NOT </span> been sent to{' '}
      <span className="modal__info-sub-text-email">{sendedEmail}</span>
    </p>
  ) : (
    <p className="modal__info">
      Email with the training info has been sent to{' '}
      <span className="modal__info-sub-text-email">{sendedEmail}</span>
      <br></br>
      <div className="modal__info-sub-text-success">successfully</div>
    </p>
  );

  const handlerCloseModal = (): void => {
    closeModal(true);
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal__container">
            <div className="modal__icons-wrapper">
              {!error ? (
                <Image
                  src="/mdi_tick.svg"
                  alt="icon success"
                  width={64}
                  height={64}
                />
              ) : (
                <Image
                  src="/error-icon-close.svg"
                  alt="icon error"
                  width={64}
                  height={64}
                />
              )}

              <Image
                src="/close-bold.svg"
                alt="close icon"
                width={32}
                height={32}
                onClick={handlerCloseModal}
              />
            </div>

            <div className="modal__text-container">
              <h2 className="modal__header">{isError}</h2>
              {modalInfo}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
