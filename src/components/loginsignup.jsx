// LoginSignup.js
import React, { useState } from "react";
import Modal from '../components/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const LoginSignup = ({ setisLoged, setuserRut, isAdmin }) => {
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rutR, setRutR] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [isRegisterPress, setisRegisterPress] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isBtnShowPasswordLoginPress, setisBtnShowPasswordLoginPress] = useState(false);
  const [isBtnShowPasswordConfirmRegisterPress, setisBtnShowPasswordConfirmRegisterPress] = useState(false);
  const [isBtnShowPasswordRegisterPress, setisBtnShowPasswordRegisterPress] = useState(false);
  const [modalType, setModalType] = useState(1);

  const handleRutChange = (event) => setRut(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRutRChange = (event) => setRutR(event.target.value);
  const handlePasswordRChange = (event) => setPasswordR(event.target.value);
  const handlePasswordCChange = (event) => setPasswordC(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegisterPress) {
      setModalTitle("Te has registrado con éxito");
      setuserRut(rutR);
    } else {
      setModalTitle("Sesión iniciada correctamente");
      setuserRut(rut);
    }
    setModalMessage("");
    setModalOpen(true);
    setModalType(1);
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
          {isRegisterPress && (
            <div className='loginsignup__field'>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
          )}
          
          <div className='loginsignup__field-container'>
            <div className='loginsignup__field'>
              <label>Contraseña:</label>
              <input
                type={isRegisterPress ? (!isBtnShowPasswordRegisterPress ? "password":"text") : (!isBtnShowPasswordLoginPress ? "password":"text")}
                value={isRegisterPress ? passwordR : password}
                onChange={(event) => isRegisterPress ? handlePasswordRChange(event) : handlePasswordChange(event)}
                required
              />
            </div>
            <div className='button btn-showeye' onClick={() => isRegisterPress ? setisBtnShowPasswordRegisterPress(!isBtnShowPasswordRegisterPress) : setisBtnShowPasswordLoginPress(!isBtnShowPasswordLoginPress)}>
              {isRegisterPress ? 
                (!isBtnShowPasswordRegisterPress ? 
                  <FontAwesomeIcon icon={faEye} className="btn-showeye__font"/>
                :
                  <FontAwesomeIcon icon={faEyeSlash} className="btn-showeye__font"/>
                )
              : 
                (!isBtnShowPasswordLoginPress ? 
                  <FontAwesomeIcon icon={faEye} className="btn-showeye__font"/>
                :
                  <FontAwesomeIcon icon={faEyeSlash} className="btn-showeye__font"/>
                )
              }
            </div>
          </div>

          {isRegisterPress && (
            <div className='loginsignup__field-container'>
              <div className='loginsignup__field'>
                <label>Confirmar contraseña:</label>
                <input
                  type={!isBtnShowPasswordConfirmRegisterPress ? "password":"text"}
                  value={passwordC}
                  onChange={(event) => handlePasswordCChange(event)}
                  required
                />
              </div>
              <div className='button btn-showeye' onClick={()=>setisBtnShowPasswordConfirmRegisterPress(!isBtnShowPasswordConfirmRegisterPress)}>
                {
                !isBtnShowPasswordConfirmRegisterPress ? 
                  <FontAwesomeIcon icon={faEye} className="btn-showeye__font"/>
                :
                  <FontAwesomeIcon icon={faEyeSlash} className="btn-showeye__font"/>
                }
              </div>
            </div>
          )}
          
          
          <button className='button' type="submit">{isRegisterPress ? "Registrarse" : "Iniciar Sesión"}</button>
        </form>
        {isAdmin ? <></> 
        : 
        <div className='loginsignup__linkcontainer'>
          <div className='loginsignup__link' onClick={toggleForm}>
            {isRegisterPress ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
          </div>
        </div>
        }
      </div>
      {/* Modal para el registro o inicio de sesión exitoso */}
      <Modal
        isOpen={isModalOpen}
        toggleModal={handleModalClose}  
        onConfirm={handleModalClose}  
        messageTitle={modalTitle}
        message={modalMessage}
        showSuccess={true}
        autoClose={false}  
        modalType={1} 
      />
    </div>
  );
};

export default LoginSignup;