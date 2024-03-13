'use client';

import './Modal.scss';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Props {
  error: boolean;
  sendedEmail: string;
}

export const Modal: React.FC<Props> = () => {
  const error = true;

  /* const [isModalOpen, setIsModalOpen] = useState(false); */

  useEffect(() => {
    /*  setIsModalOpen(true); */
  }, [error]);

  const isError = error ? 'Error' : 'Success';

  const modalInfo = error ? (
    <p className="modal__info">
      Email with the training info has{' '}
      <span className="modal__info-sub-text-error">NOT </span> been sent to{' '}
      <span className="modal__info-sub-text-email">emai@email.com</span>
    </p>
  ) : (
    <p className="modal__info">
      Email with the training info has been sent to{' '}
      <span className="modal__info-sub-text-email">emai@email.com</span>
      <br></br>
      <div className="modal__info-sub-text-success">successfully</div>
    </p>
  );

  const handlerCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      
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
