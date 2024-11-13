import React, { useState } from 'react';
import Modal from '../components/modal';
import '../stylesheets/denunciar-page/denunciar_page.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const DenunciarPage = ({ addElemento, setuserRut }) => {
  var idContador = 10;
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

  const [rutInput, setrutInput] = useState("");
  const [nombreInput, setnombreInput] = useState("");
  const [celInput, setcelInput] = useState("");
  const [emailInput, setemailInput] = useState("");
  const [emailcInput, setemailcInput] = useState("");
  const [dirInput, setdirInput] = useState("");
  const [casaInput, setcasaInput] = useState("Casa");
  const [tipoInput, settipoInput] = useState("Árbol caído");
  const [descripcionInput, setdescripcionInput] = useState("");

  const formatRUT = (value) => {
    const cleanedValue = value.replace(/[^0-9kK]/g, '');
  
    if (cleanedValue.length <= 1) return cleanedValue;
  
    const body = cleanedValue.slice(0, -1);
    const verifier = cleanedValue.slice(-1).toUpperCase();
    const formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${formattedBody}-${verifier}`;
  };
  

  const handleRutChange = (event) => {
    const formattedRut = formatRUT(event.target.value);
    setrutInput(formattedRut);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalTitle("¿Desea confirmar la denuncia?");
    setModalMessage("Esta acción no se puede deshacer.");
    setModalType(2);
    setModalOpen(true);
    setConfirmed(false);
  };

  const handleConfirm = () => {
    const fecha = new Date();

    const dia = String(fecha.getDate()).padStart(2, '0'); // Día (2 dígitos)
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Mes (2 dígitos, +1 porque los meses son 0-indexados)
    const año = fecha.getFullYear(); // Año (4 dígitos)

    const fechaFormateada = `${dia}-${mes}-${año}`;
    console.log(tipoInput)

    addElemento(rutInput, {
      id: idContador,
      tipo: tipoInput,
      direccion_den: locationValue,
      direccion_res: dirInput,
      fecha: fechaFormateada,
      estado: "Pendiente",
      nombre: nombreInput,
      telefono: celInput,
      email: emailInput,
      casa: casaInput, 
      descripcion: descripcionInput,
      respuesta: "",
    })

    idContador++;
    setuserRut(rutInput);
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
                <label>Rut Vecino<span className="obligatorio">*</span></label>
                <input
                  type="text"
                  value={rutInput}
                  onChange={handleRutChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Nombre Vecino<span className="obligatorio">*</span></label>
                <input type="text" onChange={(event) => setnombreInput(event.target.value)} required />
              </div>
              <div className="inline-input-group">
                <div>
                  <label>Teléfono Vecino<span className="obligatorio">*</span></label>
                  <input type="text" onChange={(event) => setcelInput(event.target.value)} required />
                </div>
                <div>
                  <label>Correo Electrónico<span className="obligatorio">*</span></label>
                  <input type="email" onChange={(event) => setemailInput(event.target.value)} required />
                </div>
                <div>
                  <label>Confirmar Correo<span className="obligatorio">*</span></label>
                  <input type="email" onChange={(event) => setemailcInput(event.target.value)} required />
                </div>
              </div>
              <div className="inline-input-group">
                <div>
                  <label>Dirección de Residencia<span className="obligatorio">*</span></label>
                  <input type="text" onChange={(event) => setdirInput(event.target.value)} required />
                </div>
                <div>
                  <label>Casa/ Depto/ Oficina</label>
                  <select className="select-casa"onChange={(event) => setcasaInput(event.target.value)} required>
                    <option value="Casa">Casa</option>
                    <option value="Depto">Depto</option>
                    <option value="Oficina">Oficina</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="section-title-container">
                <h2 className="section-title">Datos Denuncia</h2>
              </div>
              <div className="input-group">
                <label>Tipo de Denuncia<span className="obligatorio">*</span></label>
                <select onChange={(event) => settipoInput(event.target.value)} required>
                  <option value="Árbol Caído">Árbol Caído</option>
                  <option value="Basura">Basura</option>
                  <option value="Falta de Señaléticas de Tránsito">Falta de Señaléticas de Tránsito</option>
                  <option value="Iluminación">Iluminación</option>
                  <option value="Pavimento">Pavimento</option>
                  <option value="Plagas">Plagas</option>
                  <option value="Semáforos">Semáforos</option>
                  <option value="Vandalismo">Vandalismo</option>
                </select>
              </div>
              <div className="input-group">
                <label>Dirección Denuncia<span className="obligatorio">*</span></label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="text"
                    onChange={(event) => setLocationValue(event.target.value)}
                    value={locationValue}
                  />
                  <FontAwesomeIcon 
                    icon={faLocationDot} 
                    onClick={handleLocationClick} 
                    className="location-button" 
                  />
                </div>
              </div>
              <div className="input-group">
                <label>Descripción Denuncia</label>
                <textarea onInput={(event) => setdescripcionInput(event.target.value)}/>
              </div>
              <div className="submit-btn">
                <button type="submit">Enviar Denuncia</button>
              </div>
            </div>
          </div>
        </form>
        <div className='nota-obligatorio'>
          (*) Campo obligatorio
        </div>
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
