import './Modal.scss'

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__icons-wrapper">
          <img src="/mdi_tick.svg" alt="icon success" />
          <img src="/close-bold.svg" alt="close icon" />
        </div>

        <div className="modal__text-container">
          <h2 className="modal__header">Success</h2>
          <p className="modal__info">
            Email with the training info has been sent to <strong>emai@email.com </strong>
            <span className='modal__info-sub-text'>successfully.</span>
          </p>
        </div>

        <div className="modal__btn-wrapper">
          <button className="modal__btn">OK</button>
        </div>
      </div>
    </div>
  );
};
