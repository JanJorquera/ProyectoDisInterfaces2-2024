// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import '../stylesheets/home/HomePage.scss';
import iluminaImage from '../assets/Ilumina.jpg';
import semaforosImage from '../assets/semaforos.png';

const newsData = [
    {
        title: "Instalación de Nuevos Postes de Luz",
        description: "Se han instalado 50 nuevos postes de luz en la comunidad, garantizando una mejor iluminación y mayor seguridad durante la noche.",
        image: iluminaImage,
    },
    {
        title: "40 semáforos nuevos en la comuna",
        description: "Se han instalado 40 nuevos semáforos en la comuna, mejorando significativamente la seguridad vial y facilitando el tránsito para peatones y conductores.",
        image: semaforosImage,
    },
    // Agrega más noticias aquí
];

const HomePage = () => {
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNewsIndex((prevIndex) =>
                (prevIndex + 1) % newsData.length
            );
        }, 5000); //5 segundos

        return () => clearInterval(interval); 
    }, []);

    const nextNews = () => {
        setCurrentNewsIndex((prevIndex) =>
            (prevIndex + 1) % newsData.length
        );
    };

    const prevNews = () => {
        setCurrentNewsIndex((prevIndex) =>
            (prevIndex - 1 + newsData.length) % newsData.length
        );
    };

    return (
        <div className="home-container">
            <div className="news-box">
                <h2>Últimas Noticias</h2>
                <div className="news-container">
                    <button className="nav-button" onClick={prevNews}>◀</button>
                    <div className={`news-item ${currentNewsIndex === currentNewsIndex ? 'visible' : ''}`}>
                        <img src={newsData[currentNewsIndex].image} alt="Imagen de noticia" className="news-image" />
                        <div className="news-content">
                            <h3>{newsData[currentNewsIndex].title}</h3>
                            <p>{newsData[currentNewsIndex].description}</p>
                        </div>
                    </div>
                    <button className="nav-button" onClick={nextNews}>▶</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;