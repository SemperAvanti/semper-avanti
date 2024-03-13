import './Modal.scss';
import Image from 'next/image';

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__icons-wrapper">
          <Image
            src="/mdi_tick.svg"
            alt="icon success"
            width={64}
            height={64}
          ></Image>
          <Image
            src="/close-bold.svg"
            alt="close icon"
            width={32}
            height={32}
          ></Image>
        </div>

        <div className="modal__text-container">
          <h2 className="modal__header">Success</h2>
          <p className="modal__info">
            Email with the training info has been sent to{' '}
            <strong>emai@email.com </strong>
            <span className="modal__info-sub-text">successfully.</span>
          </p>
        </div>

        <div className="modal__btn-wrapper">
          <button className="modal__btn">OK</button>
        </div>
      </div>
    </div>
  );
};
