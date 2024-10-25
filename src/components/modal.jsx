import React, { useEffect } from 'react';

const Modal = ({ 
  isOpen, 
  toggleModal, 
  onConfirm, 
  messageTitle, 
  message, 
  showSuccess, 
  autoClose,
  modalType 
}) => {
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(() => {
        console.log("Auto-closing modal");
        onConfirm();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, onConfirm]);

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal">
        <div className="modal-content">
          <h2>{messageTitle}</h2>
          <p>{message}</p>
          
          {/* Modal tipo 1 */}
          {modalType === 1 && showSuccess && !autoClose && (
            <button className="confirm-modal" onClick={toggleModal}>
              CONTINUAR
            </button>
          )}

          {/* Modal tipo 2 */}
          {modalType === 2 && !showSuccess && (
            <>
              <button className="close-modal" onClick={toggleModal}>
                CANCELAR
              </button>
              <button className="confirm-modal" onClick={onConfirm}>
                SI
              </button>
            </>
          )}

          {/* Modal tipo 3 */}
          {modalType === 3 && (
            <button className="confirm-modal" onClick={toggleModal}>
              X
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
