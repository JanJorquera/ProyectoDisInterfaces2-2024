// LoginSignup.js
import React, { useState } from "react";
import Modal from '../components/modal';

export const LoginSignup = ({setisLoged, setuserRut}) => {
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rutR, setRutR] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [isRegisterPress, setisRegisterPress] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleRutChange = (event) => setRut(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRutRChange = (event) => setRutR(event.target.value);
  const handlePasswordRChange = (event) => setPasswordR(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegisterPress) {
      setModalTitle("Te has registrado con éxito");
      setuserRut(rutR);
    } else {
      setModalTitle("Has iniciado sesión correctamente");
      setuserRut(rut);
    }
    setModalOpen(true);
    
  };

  const toggleForm = () => setisRegisterPress(!isRegisterPress);
  const handleModalClose = () => {
    setModalOpen(false);
    setisLoged(true);
  };

  return (
    <div className='loginsignupcontainer'>
      <div className='loginsignup'>
        <h2>{isRegisterPress ? "Registrarse" : "Iniciar Sesión"}</h2>
        <form className='loginsignup__form' onSubmit={handleSubmit}>
          <div className='loginsignup__field'>
            <label>Rut:</label>
            <input
              type="text"
              value={isRegisterPress ? rutR : rut}
              onChange={(event) => isRegisterPress ? handleRutRChange(event) : handleRutChange(event)}
              required
            />
          </div>
          {isRegisterPress ? 
            <div className='loginsignup__field'>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
          : 
            <></>
          }
          
          <div className='loginsignup__field'>
            <label>Contraseña:</label>
            <input
              type="password"
              value={isRegisterPress ? passwordR : password}
              onChange={(event) => isRegisterPress ? handlePasswordRChange(event) : handlePasswordChange(event)}
              required
            />
          </div>
          
          <button className='button' type="submit">{isRegisterPress ? "Registrarse" : "Iniciar Sesión"}</button>
        </form>
        <div className='loginsignup__linkcontainer'>
          <div className='loginsignup__link' onClick={toggleForm}>
            {isRegisterPress ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
          </div>
          {
            /*
            <div>|</div>
            <div className='loginsignup__link'>¿Olvidaste tu contraseña?</div>
            */
          }
        </div>
      </div>
      {/* Modal para el registro o inicio de sesión exitoso */}
      <Modal
        isOpen={isModalOpen}
        toggleModal={() => setModalOpen(false)}
        onConfirm={handleModalClose}
        messageTitle={modalTitle}
        message={modalMessage}
        showSuccess={true}
        autoClose={true}
      />
    </div>
  );
};

export default LoginSignup;
