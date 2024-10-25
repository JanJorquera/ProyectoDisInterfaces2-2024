import React, { useState } from 'react';
import Modal from '../components/modal';
import '../stylesheets/denunciar-page/denunciar_page.scss';

const DenunciarPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalTitle("¿Desea confirmar la denuncia?");
    setModalOpen(true);
    setConfirmed(false);
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setModalTitle("Denuncia enviada exitosamente");
  };

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

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          toggleModal={handleCloseSuccess}
          onConfirm={handleConfirm}
          messageTitle={modalTitle}
          message={modalMessage}
          showSuccess={isConfirmed}
          autoClose={false}
        />
      )}
    </div>
  );
};

export default DenunciarPage;
