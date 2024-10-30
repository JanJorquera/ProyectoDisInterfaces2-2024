import React, { useState } from 'react';
import LoginSignup from '../components/loginsignup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const MyReportsPage = ({isLoged, setisLoged, userRut, setuserRut}) =>{
    // Simulamos denuncias, en un caso real esto vendría de una API
    const [numPag, setnumPag] = useState(1);
    const sizePag = 4;
    const muestraDenuncias = { "21.219.902-8":
        [
            { tipo: 'Semáforo', direccion: 'Calle 123', fecha: '24-10-2024', estado: 'Pendiente' },
            { tipo: 'Bache', direccion: 'Av. Siempre Viva', fecha: '02-10-2024', estado: 'En progreso' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta' },
        ]
    }
    var isRutSinDenuncias = false;

    if (muestraDenuncias[userRut] === undefined || muestraDenuncias[userRut].length === 0) {
        isRutSinDenuncias = true
    }

    const handleClass = dir => {
        var retorno = "pagination-buttons__button";
        if (dir === "left" && numPag === 1) {
            retorno = retorno + " pagination-buttons__button--bloqueado";
        } else if (dir === "right" && numPag === Math.trunc(muestraDenuncias[userRut].length / sizePag)) {
            retorno = retorno + " pagination-buttons__button--bloqueado";
        }
        return retorno;
    }

    const getPagX = (pagX, sizePag, muestraDenuncias)=>{
        var arrayAux = muestraDenuncias[userRut].slice((pagX-1)*sizePag, pagX*sizePag)

        return (
            arrayAux.map((denuncia, index) => (
            <tr key={index}>
                <td>{denuncia.tipo}</td>
                <td>{denuncia.direccion}</td>
                <td>{denuncia.fecha}</td>
                <td>{denuncia.estado}</td>
                <td>
                <button className="btn-ver-denuncia">Ver</button>
                </td>
            </tr>
            ))
        )
    }
    
    return (
        <>
            {isLoged ?
                <div className="denuncias-container">
                    <h1>Mis Denuncias</h1>
                    {
                        isRutSinDenuncias ? 
                        <div>
                            Aún no tienes denuncias
                        </div>
                        :
                        <>
                            <table className="denuncias-table">
                                <thead>
                                    <tr>
                                    <th>Tipo de Denuncia</th>
                                    <th>Dirección</th>
                                    <th>Fecha</th>
                                    <th>Estado</th>
                                    <th>Ir a la denuncia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getPagX(numPag, sizePag, muestraDenuncias)
                                    }
                                </tbody>
                            </table>
                    
                            <div className="pagination">
                                <span>Filas máximas por página: {`${sizePag}`}</span>
                                <span>{`${(numPag-1)*sizePag+1}-${ numPag*sizePag+1 < muestraDenuncias[userRut].length ? numPag*sizePag : muestraDenuncias[userRut].length} de ${muestraDenuncias[userRut].length}`}</span>
                                <div className="pagination-buttons">
                                    {
                                        numPag === 1 ? 
                                        <div className={handleClass("left")}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </div>
                                        : 
                                        <div className={handleClass("left")} onClick={()=>{setnumPag(numPag-1)}}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </div>
                                    }

                                    {
                                        numPag*sizePag+1 < muestraDenuncias[userRut].length ? 
                                        <div className={handleClass("right")} onClick={()=>{setnumPag(numPag+1)}}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                        :
                                        <div className={handleClass("right")}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>
            :
                <LoginSignup setisLoged={setisLoged} setuserRut={setuserRut}/>
            }
        </>
    );
};

export default MyReportsPage;