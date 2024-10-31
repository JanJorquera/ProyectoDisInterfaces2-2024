// src/pages/Report_Detail.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../stylesheets/report-detail/ReportDetail.scss';

const ReportDetail = () => {
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
                </div>

                <div className="section-header">Datos Denuncia</div>
                <div className="section-content">
                    <p><strong>Tipo:</strong> {denuncia.tipo}</p>
                    <p><strong>Dirección:</strong> {denuncia.direccion}</p>
                    <p><strong>Fecha:</strong> {denuncia.fecha}</p>
                </div>
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
                <div className="section-header">Respuesta Municipal</div>
                <div className="section-content response-box">
                    {denuncia.respuesta}
                </div>
                <div className="status-box">
                    <strong>Estado:</strong> {denuncia.estado}
                </div>
                <Link 
                    to="/mis-denuncias" 
                    state={{ filtros }} 
                    className="btn-return"
                >
                    Regresar a Mis Denuncias
                </Link>
            </div>
        </div>
    );
};

export default ReportDetail;
