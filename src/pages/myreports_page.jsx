import React from 'react';
import LoginSignup from '../components/loginsignup';

export const MyReportsPage = ({isLoged, setisLoged, userRut, setuserRut}) =>{
    // Simulamos denuncias, en un caso real esto vendría de una API
    const muestraDenuncias = { "21.219.902-8":
        [
            { tipo: 'Semáforo', direccion: 'Calle 123', fecha: '24-10-2024', estado: 'Pendiente' },
            { tipo: 'Bache', direccion: 'Av. Siempre Viva', fecha: '02-10-2024', estado: 'En progreso' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta' },
        ]
    }
    
    return (
        <>
            {isLoged ?
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
                            {
                                muestraDenuncias[userRut] === undefined || muestraDenuncias[userRut].length === 0 ? 
                                <></> 
                                : 
                                
                                muestraDenuncias[userRut].map((denuncia, index) => (
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
                            }
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
            :
                <LoginSignup setisLoged={setisLoged} setuserRut={setuserRut}/>
            }
        </>
    );
};

export default MyReportsPage;