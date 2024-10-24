import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import X from '../assets/x.png';
import Whatsapp from '../assets/whatsapp.png';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__element'>
                Munidenuncias
            </div>
            <div className='footer__element'>
                <div className='footer__subelement'>Contacto</div>
                <div className='footer__subelement--container'>
                    <div className='footer__subelement--content'>
                        <div className='footer__contact'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='footer__contact'>
                            +562 133 523 22
                        </div>
                    </div>
                    <div className='footer__subelement--content'>
                        <div className='footer__contact'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className='footer__contact'>
                            muni@denuncia.com
                        </div>
                    </div>
                    <div className='footer__subelement--content'>
                        <div className='footer__contact'>
                            <FontAwesomeIcon icon={faMapLocationDot} />
                        </div>
                        <div className='footer__contact'>
                            Av. denuncias 321
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__element'>
                <div className='footer__subelement'>Redes Sociales</div>
                <div className='footer__imgcontainer'>
                    <img className='footer__image' src={Facebook}></img>
                    <img className='footer__image' src={Whatsapp}></img>
                    <img className='footer__image' src={X}></img>
                    <img className='footer__image' src={Instagram}></img>
                </div>
            </div>
            <div className='footer__element'>
                Munidenuncias
            </div>
        </div>
    );
}

export default Footer;