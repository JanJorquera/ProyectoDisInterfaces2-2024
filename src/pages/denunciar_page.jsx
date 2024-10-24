import React from 'react';
import '../stylesheets/denunciar-page/denunciar_page.scss'; // Importa el archivo SCSS

const DenunciarPage = () => {
  return (
    <div className="denunciar-container">
      {/* Contenedor que incluye el recuadro y el título */}
      <div className="denunciar-box">
        {/* Título dentro del recuadro */}
        <h1 className="denunciar-title">Denunciar</h1>

        {/* Contenedor de subtítulos, centrados */}
        <div className="flex-container">
          <div className="section">
            <div className="section-title-container">
              <h2 className="section-title">Datos Vecino</h2>
            </div>
          </div>
          <div className="section">
            <div className="section-title-container">
              <h2 className="section-title">Datos Denuncia</h2>
            </div>
          </div>
        </div>

        <div className="flex-container">
          {/* Sección Datos Vecino */}
          <div className="section">
            <div className="input-group">
              <label>Rut Vecino</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Nombre Vecino</label>
              <input type="text" />
            </div>

            <div className="inline-input-group">
              <div>
                <label>Teléfono Vecino</label>
                <input type="text" />
              </div>
              <div>
                <label>Correo Electrónico</label>
                <input type="email" />
              </div>
              <div>
                <label>Confirmar Correo</label>
                <input type="email" />
              </div>
            </div>

            <div className="inline-input-group">
              <div>
                <label>Dirección de residencia</label>
                <input type="text" />
              </div>
              <div>
                <label>Casa/ Depto/ Oficina</label>
                <input type="text" />
              </div>
            </div>
          </div>

          {/* Sección Datos Denuncia */}
          <div className="section">
            <div className="input-group">
              <label>Tipo de Denuncia</label>
              <select>
                <option value="semaforos">Semáforos</option>
                <option value="iluminacion">Iluminación</option>
                <option value="pavimento">Pavimento</option>
              </select>
            </div>

            <div className="input-group">
              <label>Dirección Denuncia</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Descripción Denuncia</label>
              <textarea />
            </div>

            <div className="submit-btn">
              <button type="submit">Enviar Denuncia</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenunciarPage;