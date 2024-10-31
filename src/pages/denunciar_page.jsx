import React, { useState } from 'react';
import Modal from '../components/modal';
import '../stylesheets/denunciar-page/denunciar_page.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const DenunciarPage = () => {
  const API_KEY = "pk.398a73e6f152267d6423ca330f9d87e4";
  const [locationValue, setLocationValue] = useState("");

  const obtenerDireccion = async (latitude, longitude) => {
    const url = `https://us1.locationiq.com/v1/reverse?key=${API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;

    try {
        const sol = await fetch(url);
        const res = await sol.json();
        console.log(res); 

        if (res && res.address) {
            
            const addressComponents = [
                res.address.road,
                res.address.house_number,
                res.address.city,
                res.address.state,
                res.address.country
            ].filter(Boolean).join(", ");

            setLocationValue(addressComponents || "Calle no encontrada, favor ingresar por escrito");
        } else {
            setLocationValue("No se encontró la dirección, favor ingresar por escrito");
        }
    } catch (e) {
        console.error("Error al obtener la dirección:", e);
    }
};

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("La geolocalización no es soportada por este navegador.");
    }
  };

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    obtenerDireccion(latitude, longitude);
  }

  function error() {
    console.log("No se pudo obtener la ubicación.");
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalTitle("¿Desea confirmar la denuncia?");
    setModalMessage("Esta acción no se puede deshacer.");
    setModalType(2);
    setModalOpen(true);
    setConfirmed(false);
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setModalTitle("Denuncia enviada exitosamente");
    setModalMessage("");
    setModalType(1);
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
                <div>
                  <input
                    type="text"
                    onChange={(event) => setLocationValue(event.target.value)}
                    value={locationValue}
                  />
                  <div>
                    <FontAwesomeIcon icon={faLocationDot} onClick={handleLocationClick} />
                  </div>
                </div>
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
          modalType={modalType}
        />
      )}
    </div>
  );
};

export default DenunciarPage;
