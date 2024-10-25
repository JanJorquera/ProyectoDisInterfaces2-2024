import React, { useState } from 'react';
import Modal from '../components/modal';
import '../stylesheets/denunciar-page/denunciar_page.scss';

const DenunciarPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState(2);  // Definimos el modalType, inicializando con tipo 2 para confirmar la denuncia

  // Acción cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalTitle("¿Desea confirmar la denuncia?");
    setModalMessage("Esta acción no se puede deshacer.");
    setModalType(2); // Tipo 2: Confirmación con "CANCELAR" y "SI"
    setModalOpen(true);
    setConfirmed(false);
  };

  // Confirmación de la denuncia
  const handleConfirm = () => {
    setConfirmed(true);
    setModalTitle("Denuncia enviada exitosamente");
    setModalMessage(""); // Puedes limpiar el mensaje si no quieres mostrar uno nuevo
    setModalType(1);  // Tipo 1: Mostrar éxito con botón "CONTINUAR"
  };

  // Cierre del modal de éxito
  const handleCloseSuccess = () => {
    setModalOpen(false);
    setConfirmed(false);
  };

  return (
    <div className="denunciar-container">
      <div className="denunciar-box">
        <h1 className="denunciar-title">Denunciar</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex-container">
            <div className="section">
              <div className="section-title-container">
                <h2 className="section-title">Datos Vecino</h2>
              </div>
              <div className="input-group">
                <label>Rut Vecino</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Nombre Vecino</label>
                <input type="text" required />
              </div>
              <div className="inline-input-group">
                <div>
                  <label>Teléfono Vecino</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Correo Electrónico</label>
                  <input type="email" required />
                </div>
                <div>
                  <label>Confirmar Correo</label>
                  <input type="email" required />
                </div>
              </div>
              <div className="inline-input-group">
                <div>
                  <label>Dirección de residencia</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Casa/ Depto/ Oficina</label>
                  <input type="text" required />
                </div>
              </div>
            </div>

            <div className="section">
              <div className="section-title-container">
                <h2 className="section-title">Datos Denuncia</h2>
              </div>
              <div className="input-group">
                <label>Tipo de Denuncia</label>
                <select required>
                  <option value="semaforos">Semáforos</option>
                  <option value="iluminacion">Iluminación</option>
                  <option value="pavimento">Pavimento</option>
                </select>
              </div>
              <div className="input-group">
                <label>Dirección Denuncia</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Descripción Denuncia</label>
                <textarea required />
              </div>
              <div className="submit-btn">
                <button type="submit">Enviar Denuncia</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Modal dinámico dependiendo del tipo */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          toggleModal={handleCloseSuccess}  // Cierra el modal después de confirmación o éxito
          onConfirm={handleConfirm}        // Acción a tomar cuando se confirma la denuncia
          messageTitle={modalTitle}
          message={modalMessage}
          showSuccess={isConfirmed}        // Mostrar éxito si ya está confirmada
          autoClose={false}                // No usar autocierre en este caso
          modalType={modalType}            // Determina si es tipo 1 o tipo 2
        />
      )}
    </div>
  );
};

export default DenunciarPage;
