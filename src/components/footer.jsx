import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import X from '../assets/x.png';
import Whatsapp from '../assets/whatsapp.png';
import UTFSM from '../assets/UTFSM.png';

export const Footer = () => {
    const com = '.com'
    const cl = '.cl'

    const redirect = (path, domain)=>{
        window.location.href = `https://${path}${domain}`;
    }

    return (
        <div className='footer'>
            <div className='footer__element'>
                Munidenuncias
            </div>
            <div className='footer__element'>
                <div className='footer__subelement'>Contacto</div>
                <div className='footer__subelement--container'>
                    <div className='footer__subelement footer__subelement--content'>
                        <div className='footer__contact'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='footer__contact'>
                            +562 133 523 22
                        </div>
                    </div>
                    <div className='footer__subelement footer__subelement--content'>
                        <div className='footer__contact'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className='footer__contact'>
                            muni@denuncia.com
                        </div>
                    </div>
                    <div className='footer__subelement footer__subelement--content'>
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
                    <div className='footer__imgcontainer footer__imgcontainer--inside'>
                        <img onClick={()=>redirect('www.facebook', com)} className='footer__image' src={Facebook} />
                        <img onClick={()=>redirect('web.whatsapp', com)} className='footer__image' src={Whatsapp} />
                    </div>
                    <div className='footer__imgcontainer footer__imgcontainer--inside'>
                        <img onClick={()=>redirect('www.x', com)} className='footer__image' src={X} />
                        <img onClick={()=>redirect('www.instagram', com)} className='footer__image' src={Instagram} />
                    </div>
                </div>
            </div>
            <div className='footer__element'>
                <img onClick={()=>redirect('www.usm', cl)} className='footer__image footer__image--usm' src={UTFSM} />
            </div>
        </div>
    );
}

export default Footer;