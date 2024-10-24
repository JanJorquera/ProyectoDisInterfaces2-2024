import React from 'react';

const Modal = ({ isOpen, toggleModal, onConfirm, message, showSuccess, onCloseSuccess }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal">
        <div className="modal-content">
          <h2>{showSuccess ? "Denuncia Enviada Exitosamente" : "¿Desea Confirmar Denuncia?"}</h2>
          <p>{message}</p>
          {showSuccess ? (
            <button className="close-modal" onClick={onCloseSuccess}>
              SALIR
            </button>
          ) : (
            <>
              <button className="close-modal" onClick={toggleModal}>
                CANCELAR
              </button>
              <button className="confirm-modal" onClick={onConfirm}>
                SI
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
