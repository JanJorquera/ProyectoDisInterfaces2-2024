import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Municipalidad from '../assets/municipalidad.png';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinkClass = (path) => {
    const classes = ['nav-bar__button'];
    if (location.pathname === path) {
      classes.push('nav-bar__button--active');
    }
    return classes.join(' ');
  };

  return (
    <header className='nav-bar'>
      <h1 
        className='nav-bar__title' 
        onClick={() => navigate('/')} 
        style={{ cursor: 'pointer', margin: 20, display: 'flex', alignItems: 'center' }}
      >
        MuniDenuncias
        <img 
          src={Municipalidad} 
          alt="Municipalidad" 
          style={{ width: '60px', height: '60px', marginLeft: '10px' }}
        />
      </h1>
      <nav className='nav-bar__links'>
        <button className={navLinkClass('/home')} onClick={() => navigate('/home')}>
          Inicio
        </button>
        <button className={navLinkClass('/about')} onClick={() => navigate('/about')}>
          ¿Qué es MuniDenuncias?
        </button>
        <button className={navLinkClass('/mis-denuncias')} onClick={() => navigate('/mis-denuncias')}>
          Mis denuncias
        </button>
        <button className={navLinkClass('/denunciar')} onClick={() => navigate('/denunciar')}>
          Denunciar
        </button>
        <button className={navLinkClass('/')} onClick={() => navigate('/')}>
          Cambiar usuario
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
