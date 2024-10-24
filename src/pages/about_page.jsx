import React from 'react';
import municipalidad2 from '../assets/municipalidad_2.jpg';

export const AboutPage = () => {
  return (
    <div className='about-page'>
      <h1 className='about-page__title'>¿Qué es MuniDenuncias?</h1>
      <div className='about-page__container'>
        <div className='about-page__content'>
          <p>
            MuniDenuncia es un sistema que aborda el problema de la falta de comunicación efectiva y respuesta oportuna a los problemas urbanos mediante la digitalización y automatización de los procesos de denuncia y gestión. Este sistema permite a la municipalidad optimizar el uso de recursos, mejorar la transparencia y la rendición de cuentas, y aumentar la satisfacción de los ciudadanos mediante una respuesta más rápida y eficiente a los problemas que afectan su calidad de vida.
          </p>
        </div>
        <img src={municipalidad2} alt='Municipalidad' className='about-page__image' />
      </div>
    </div>
  );
};

export default AboutPage;