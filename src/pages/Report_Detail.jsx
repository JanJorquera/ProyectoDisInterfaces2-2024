// src/pages/Report_Detail.jsx
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../stylesheets/report-detail/ReportDetail.scss';

const ReportDetail = ({ isAdmin }) => {
    const [tipoEstado, settipoEstado] = useState("Pendiente");
    const location = useLocation();
    const { denuncia, filtros } = location.state || {};

    if (!denuncia) {
        return <p>No se encontraron datos de la denuncia.</p>;
    }

    return (    
        <div className="report-detail-container">
            {/* Sección izquierda: Datos Vecino y Datos Denuncia */}
            <div className="left-column">
                <div className="section-header">Datos Vecino</div>
                <div className="section-content">
                    <p><strong>Nombre:</strong> {denuncia.nombre}</p>
                    {isAdmin && 
                    <>
                        <p><strong>Rut:</strong> {denuncia.rut}</p>
                        <p><strong>Teléfono:</strong> {denuncia.telefono}</p>
                        <p><strong>Correo:</strong> {denuncia.email}</p>
                        <p><strong>Residencia:</strong> {denuncia.direccion_res}</p>
                        <p><strong>Tipo de domicilio:</strong> {denuncia.casa}</p>
                    </>
                    }
                </div>
                {
                <>
                    <div className="section-header">Datos Denuncia</div>
                    <div className="section-content">
                        <p><strong>Tipo:</strong> {denuncia.tipo}</p>
                        <p><strong>Dirección:</strong> {denuncia.direccion_res}</p>
                        <p><strong>Fecha:</strong> {denuncia.fecha}</p>
                    </div>
                </>
                }

            </div>

            {/* Sección central: Descripción Denuncia */}
            <div className="center-column">
                
                <div className="section-header">Descripción Denuncia</div>
                <div className="section-content description-box">
                    {denuncia.descripcion}
                </div>
            </div>

            {/* Sección derecha: Respuesta Municipal y Estado */}
            <div className="right-column">
                {isAdmin ? 
                    <form>
                        <div className="section-header">Respuesta Municipal</div>
                        <div className="input-group">
                            <textarea onInput={(event) => setrespuestaMunicipal(event.target.value)} required />
                        </div>
                        
                        <div className="section-header">Estado</div>
                        <select onChange={(event) => settipoEstado(event.target.value)} required>
                            <option value="Sin revisar">Sin revisar</option>
                            <option value="En curso">En curso</option>
                            <option value="Solucionada">Solucionada</option>
                        </select>

                        <div className="submit-btn">
                            <button type="submit">Enviar Denuncia</button>
                        </div>
                    </form>
                : 
                <>
                    <div className="section-header">Respuesta Municipal</div>
                    <div className="section-content response-box">
                        {denuncia.respuesta}
                    </div>
                    <div className="status-box">
                        <strong>Estado:</strong> {denuncia.estado}
                    </div>
                </>
                }
                
                <Link 
                    to={isAdmin ? "/admin" : "/mis-denuncias"}
                    state={{ filtros }} 
                    className="btn-return"
                >
                    {isAdmin ? "Regresar a Denuncias" : "Regresar a Mis Denuncias"}
                </Link>
            </div>
        </div>
    );
};

export default ReportDetail;
