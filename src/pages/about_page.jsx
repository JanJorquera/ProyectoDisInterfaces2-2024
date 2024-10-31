import React from 'react';
import municipalidad2 from '../assets/municipalidad_2.jpg';

export const AboutPage = () => {
  return (
    <div className='about-page'>
      <h1 className='about-page__title'>¿Qué es MuniDenuncias?</h1>
      <div className='about-page__container'>
        <div className='about-page__content'>
          <p>
            MuniDenuncia es un sistema que aborda la falta de comunicación efectiva y respuesta oportuna a los problemas urbanos mediante la digitalización y automatización de los procesos de denuncia y gestión de estos. Desarrollado por nuestro equipo, MuniDenuncia no solo optimiza el uso de recursos municipales, sino que también mejora la transparencia y rendición de cuentas, al ofrecer a los ciudadanos una plataforma accesible para reportar problemas urbanos. Nuestra contribución se centra en proporcionar una solución integral que agiliza la identificación, priorización y resolución de estos incidentes, permitiendo a la municipalidad responder de manera rápida y eficiente. Este sistema fortalece la relación entre la municipalidad y los ciudadanos al garantizar que sus reportes sean atendidos de forma transparente y con resultados medibles, generando confianza en la gestión municipal.
          </p>
        </div>
        <img src={municipalidad2} alt='Municipalidad' className='about-page__image' />
      </div>
    </div>
  );
};

export default AboutPage;