// src/pages/HomePage.jsx
import React from 'react';
import '../stylesheets/home/HomePage.scss';
import iluminaImage from '../assets/Ilumina.jpg';


const HomePage = () => {
  return (
    <div className="home-container">
      <h2>Últimas Noticias</h2>
      <div className="news-item">
      <img src={iluminaImage} alt="Imagen de noticia" className="news-image" />
        <div className="news-content">
          <h3>Nuevos Postes de Luz</h3>
          <p>50 nuevos postes de luz Instalados</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
