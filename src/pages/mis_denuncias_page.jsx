import React from 'react';
import '../stylesheets/mis-denuncias-page/mis_denuncias_page.scss'; // Importa el archivo SCSS

const MisDenuncias = () => {
    // Simulamos denuncias, en un caso real esto vendría de una API
    const denuncias = [
      { tipo: 'Semáforo', direccion: 'Calle 123', fecha: '24-10-2024', estado: 'Pendiente' },
      { tipo: 'Bache', direccion: 'Av. Siempre Viva', fecha: '02-10-2024', estado: 'En progreso' },
      { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta' },
    ];
  
    return (
      <div className="denuncias-container">
        <h1>Mis Denuncias</h1>
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
            {denuncias.map((denuncia, index) => (
              <tr key={index}>
                <td>{denuncia.tipo}</td>
                <td>{denuncia.direccion}</td>
                <td>{denuncia.fecha}</td>
                <td>{denuncia.estado}</td>
                <td>
                  <button className="btn-ver-denuncia">Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <div className="pagination">
          <span>Filas por página: 3</span>
          <span>1-3 de 20</span>
          <div className="pagination-buttons">
            <button>&#60;</button>
            <button>&#62;</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default MisDenuncias;