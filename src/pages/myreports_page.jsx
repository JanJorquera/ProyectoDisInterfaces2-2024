import React, { useState, useEffect } from 'react';
import LoginSignup from '../components/loginsignup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MyReportsPage = ({ isLoged, setisLoged, userRut, setuserRut, muestraDenuncias }) => {
    const [numPag, setnumPag] = useState(1);
    const location = useLocation();
    const filtrosIniciales = location.state?.filtros || {}; // Obtén los filtros desde el state o usa valores vacíos
    const [filtroTiempo, setFiltroTiempo] = useState(filtrosIniciales.filtroTiempo || '');
    const [filtroEstado, setFiltroEstado] = useState(filtrosIniciales.filtroEstado || '');
    const [filtroTipo, setFiltroTipo] = useState(filtrosIniciales.filtroTipo || '');
    const sizePag = 4;

    const denunciasUsuario = muestraDenuncias[userRut] || [];
    const isRutSinDenuncias = !denunciasUsuario.length;
    const [denunciasFiltradas, setDenunciasFiltradas] = useState(denunciasUsuario);

    useEffect(() => {
        aplicarFiltro();
        setnumPag(1);
    }, [filtroTiempo, filtroEstado, filtroTipo, userRut]);

    const aplicarFiltro = () => {
        let filtradas = denunciasUsuario;

        if (filtroTipo) {
            filtradas = filtradas.filter(denuncia => denuncia.tipo === filtroTipo);
        }

        if (filtroEstado) {
            filtradas = filtradas.filter(denuncia => denuncia.estado === filtroEstado);
        }

        const hoy = new Date();
        if (filtroTiempo) {
            filtradas = filtradas.filter(denuncia => {
                const [dia, mes, año] = denuncia.fecha.split('-').map(Number);
                const fechaDenuncia = new Date(año, mes - 1, dia);

                if (filtroTiempo === 'hoy') {
                    return fechaDenuncia.toDateString() === hoy.toDateString();
                } else if (filtroTiempo === 'semana') {
                    const unaSemanaAntes = new Date();
                    unaSemanaAntes.setDate(hoy.getDate() - 7);
                    return fechaDenuncia >= unaSemanaAntes && fechaDenuncia <= hoy;
                } else if (filtroTiempo === 'mes') {
                    const unMesAntes = new Date();
                    unMesAntes.setMonth(hoy.getMonth() - 1);
                    return fechaDenuncia >= unMesAntes && fechaDenuncia <= hoy;
                }
                return true;
            });
        }

        setDenunciasFiltradas(filtradas);
    };

    const handleClass = (dir) => {
        let retorno = "pagination-buttons__button";
        if (dir === "left" && numPag === 1) {
            retorno += " pagination-buttons__button--bloqueado";
        } else if (dir === "right" && numPag === Math.ceil(denunciasFiltradas.length / sizePag)) {
            retorno += " pagination-buttons__button--bloqueado";
        }
        return retorno;
    };

    const getPagX = (pagX, sizePag, denuncias) => {
        const arrayAux = denuncias.slice((pagX - 1) * sizePag, pagX * sizePag);
        return arrayAux.map((denuncia, index) => (
            <tr key={index}>
                <td>{denuncia.tipo}</td>
                <td>{denuncia.direccion_den}</td>
                <td>{denuncia.fecha}</td>
                <td>{denuncia.estado}</td>
                <td>
                    <Link 
                        to="/detalle-denuncias" 
                        state={{ denuncia,
                            filtros: { filtroTiempo, filtroEstado, filtroTipo } }} // Pasa los datos de la denuncia aquí
                        className="btn-ver-denuncia"
                    >
                        Ver
                    </Link>
                </td>
            </tr>
        ));
    };

    return (
        <>
            {
                isRutSinDenuncias ? (
                    <div className="no-reports-message">
                        <p>Aún no tienes denuncias</p>
                    </div>
                ) : (
                    <div className="denuncias-container">
                        <h1>Mis Denuncias</h1>

                        <div className="filter-section">
                            <span>Filtrar por:</span>
                            <div className="filter-option">
                                <label>Tiempo: </label>
                                <select value={filtroTiempo} onChange={(e) => setFiltroTiempo(e.target.value)}>
                                    <option value="">Desde Siempre</option>
                                    <option value="hoy">Hoy</option>
                                    <option value="semana">Última semana</option>
                                    <option value="mes">Último mes</option>
                                </select>
                            </div>
                            <div className="filter-option">
                                <label>Estado: </label>
                                <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
                                    <option value="">Todos los estados</option>
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="En progreso">En progreso</option>
                                    <option value="Resuelta">Resuelta</option>
                                </select>
                            </div>
                            <div className="filter-option">
                                <label>Tipo: </label>
                                <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
                                    <option value="">Todos los tipos</option>
                                    <option value="Semáforo">Semáforo</option>
                                    <option value="Pavimento">Pavimento</option>
                                    <option value="Alumbrado">Alumbrado</option>
                                    <option value="Basura">Basura</option>
                                    <option value="Vandalismo">Vandalismo</option>
                                    <option value="Plagas">Plagas</option>
                                    <option value="Falta de Señaléticas de Tránsito">Falta de Señaléticas de Tránsito</option>
                                    <option value="Árbol Caído">Árbol Caído</option>

                                </select>
                            </div>
                        </div>

                        {denunciasFiltradas.length === 0 ? (
                            <div className="no-reports-message">
                                <p>No hay denuncias para mostrar</p>
                            </div>
                        ) : (
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
                                    <tbody>{getPagX(numPag, sizePag, denunciasFiltradas)}</tbody>
                                </table>

                                <div className="pagination">
                                    <span>Filas máximas por página: {`${sizePag}`}</span>
                                    <span>{`${(numPag - 1) * sizePag + 1}-${numPag * sizePag < denunciasFiltradas.length ? numPag * sizePag : denunciasFiltradas.length} de ${denunciasFiltradas.length}`}</span>
                                    <div className="pagination-buttons">
                                        <div className={handleClass("left")} onClick={() => numPag > 1 && setnumPag(numPag - 1)}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </div>
                                        <div className={handleClass("right")} onClick={() => numPag * sizePag < denunciasFiltradas.length && setnumPag(numPag + 1)}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )
            }
        </>
    );
};

export default MyReportsPage;
