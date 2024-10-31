// UserTypeSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const handleDenuncianteClick = () => {
    navigate('/home');
  };

  const handleAdminClick = () => {
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
