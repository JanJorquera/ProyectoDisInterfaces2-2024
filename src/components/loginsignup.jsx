// LoginSignup.js
import React, { useState } from "react";

export const LoginSignup = ({setisLoged}) => {
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterPress, setisRegisterPress] = useState(false);

  const handleRutChange = (event) => setRut(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    //Manejar modal queda pendiente
    setisLoged(true);
  };

  const toggleForm = () => setisRegisterPress(!isRegisterPress);

  return (
    <div className='loginsignupcontainer'>
      <div className='loginsignup'>
      <h2>{isRegisterPress ? "Registrarse" : "Iniciar Sesión"}</h2>
      <form className='loginsignup__form' onSubmit={handleSubmit}>
        <div className='loginsignup__field'>
          <label>Rut:</label>
          <input
            type="text"
            value={rut}
            onChange={handleRutChange}
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
            value={password}
            onChange={handlePasswordChange}
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
    </div>
  );
};

export default LoginSignup;