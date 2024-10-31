// UserTypeSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTypeSelection = ({ setisAdmin }) => {
  const navigate = useNavigate();

  const handleDenuncianteClick = () => {
    setisAdmin(false);
    navigate('/home');
  };

  const handleAdminClick = () => {
    setisAdmin(true);
    navigate('/admin'); 
  };

  return (
    <div className="user-type-selection">
      <h1>Selecciona tu tipo de usuario</h1>
      <button onClick={handleDenuncianteClick}>Soy Denunciante</button>
      <button onClick={handleAdminClick}>Soy Administrador</button>
    </div>
  );
};

export default UserTypeSelection;
