import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from '../components/nav_bar';
import UserTypeSelection from '../pages/user_type_selection.jsx';
import HomePage from '../pages/home_page';
import LightbulbPage from '../pages/lightbulb_page';
import MyReportsPage from '../pages/myreports_page.jsx';
import DenunciarPage from '../pages/denunciar_page';
import AboutPage from '../pages/about_page';
import Footer from '../components/footer';
import ReportDetail from '../pages/Report_Detail.jsx'

const Layout = () => {
  const [isLoged, setisLoged] = useState(false);
  const [userRut, setuserRut] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  const [muestraDenuncias, setmuestraDenuncias] = useState({
    "21.219.902-8": [
            { tipo: 'Semáforo', direccion: 'Calle 123', fecha: '24-10-2024', estado: 'Pendiente', nombre: 'Jan Jorquera C', email: 'jan.jorquera@usm.cl', casa: 'Av. Vicuña Mackenna 3939', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tellus sed nisi scelerisque, at tincidunt orci tristique. Aliquam erat volutpat. Duis pellentesque leo in dictum pulvinar. Proin sed sapien quis lacus facilisis interdum. Suspendisse cursus facilisis gravida. Praesent consequat venenatis augue nec pharetra. Duis a vulputate ante, non malesuada lorem. Fusce dictum, libero in faucibus lacinia, libero dui facilisis diam, non vestibulum purus mauris in augue.', respuesta: ''},
            { tipo: 'Bache', direccion: 'Av. Siempre Viva', fecha: '02-10-2024', estado: 'En progreso', nombre: 'Jan Jorquera C', email: 'jan.jorquera@usm.cl', casa: 'Av. Vicuña Mackenna 3939', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tellus sed nisi scelerisque, at tincidunt orci tristique. Aliquam erat volutpat. Duis pellentesque leo in dictum pulvinar. Proin sed sapien quis lacus facilisis interdum. Suspendisse cursus facilisis gravida. Praesent consequat venenatis augue nec pharetra. Duis a vulputate ante, non malesuada lorem. Fusce dictum, libero in faucibus lacinia, libero dui facilisis diam, non vestibulum purus mauris in augue.', respuesta: 'En revisión estimado' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta', nombre: 'Jan Jorquera C', email: 'jan.jorquera@usm.cl', casa: 'Av. Vicuña Mackenna 3939', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tellus sed nisi scelerisque, at tincidunt orci tristique. Aliquam erat volutpat. Duis pellentesque leo in dictum pulvinar. Proin sed sapien quis lacus facilisis interdum. Suspendisse cursus facilisis gravida. Praesent consequat venenatis augue nec pharetra. Duis a vulputate ante, non malesuada lorem. Fusce dictum, libero in faucibus lacinia, libero dui facilisis diam, non vestibulum purus mauris in augue.', respuesta: 'Solicitud resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta', nombre: 'Jan Jorquera C', email: 'jan.jorquera@usm.cl', casa: 'Av. Vicuña Mackenna 3939', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tellus sed nisi scelerisque, at tincidunt orci tristique. Aliquam erat volutpat. Duis pellentesque leo in dictum pulvinar. Proin sed sapien quis lacus facilisis interdum. Suspendisse cursus facilisis gravida. Praesent consequat venenatis augue nec pharetra. Duis a vulputate ante, non malesuada lorem. Fusce dictum, libero in faucibus lacinia, libero dui facilisis diam, non vestibulum purus mauris in augue.', respuesta: 'Solicitud resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta', nombre: 'Jan Jorquera C', email: 'jan.jorquera@usm.cl', casa: 'Av. Vicuña Mackenna 3939', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tellus sed nisi scelerisque, at tincidunt orci tristique. Aliquam erat volutpat. Duis pellentesque leo in dictum pulvinar. Proin sed sapien quis lacus facilisis interdum. Suspendisse cursus facilisis gravida. Praesent consequat venenatis augue nec pharetra. Duis a vulputate ante, non malesuada lorem. Fusce dictum, libero in faucibus lacinia, libero dui facilisis diam, non vestibulum purus mauris in augue.', respuesta: 'Solicitud resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta', nombre: 'Jan Jorquera C', email: 'jan.jorquera@usm.cl', casa: 'Av. Vicuña Mackenna 3939', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tellus sed nisi scelerisque, at tincidunt orci tristique. Aliquam erat volutpat. Duis pellentesque leo in dictum pulvinar. Proin sed sapien quis lacus facilisis interdum. Suspendisse cursus facilisis gravida. Praesent consequat venenatis augue nec pharetra. Duis a vulputate ante, non malesuada lorem. Fusce dictum, libero in faucibus lacinia, libero dui facilisis diam, non vestibulum purus mauris in augue.', respuesta: 'Solicitud resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta', nombre: 'Jan Jorquera C', email: 'jan.jorquera@usm.cl', casa: 'Av. Vicuña Mackenna 3939', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tellus sed nisi scelerisque, at tincidunt orci tristique. Aliquam erat volutpat. Duis pellentesque leo in dictum pulvinar. Proin sed sapien quis lacus facilisis interdum. Suspendisse cursus facilisis gravida. Praesent consequat venenatis augue nec pharetra. Duis a vulputate ante, non malesuada lorem. Fusce dictum, libero in faucibus lacinia, libero dui facilisis diam, non vestibulum purus mauris in augue.', respuesta: 'Solicitud resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta', nombre: 'Jan Jorquera C', email: 'jan.jorquera@usm.cl', casa: 'Av. Vicuña Mackenna 3939', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tellus sed nisi scelerisque, at tincidunt orci tristique. Aliquam erat volutpat. Duis pellentesque leo in dictum pulvinar. Proin sed sapien quis lacus facilisis interdum. Suspendisse cursus facilisis gravida. Praesent consequat venenatis augue nec pharetra. Duis a vulputate ante, non malesuada lorem. Fusce dictum, libero in faucibus lacinia, libero dui facilisis diam, non vestibulum purus mauris in augue.', respuesta: 'Solicitud resuelta' },
            { tipo: 'Alumbrado', direccion: 'Calle Falsa 123', fecha: '01-10-2024', estado: 'Resuelta', nombre: 'Jan Jorquera C', email: 'jan.jorquera@usm.cl', casa: 'Av. Vicuña Mackenna 3939', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tellus sed nisi scelerisque, at tincidunt orci tristique. Aliquam erat volutpat. Duis pellentesque leo in dictum pulvinar. Proin sed sapien quis lacus facilisis interdum. Suspendisse cursus facilisis gravida. Praesent consequat venenatis augue nec pharetra. Duis a vulputate ante, non malesuada lorem. Fusce dictum, libero in faucibus lacinia, libero dui facilisis diam, non vestibulum purus mauris in augue.', respuesta: 'Solicitud resuelta' },
      ]
    });

  const location = useLocation();

  const addElemento = (rut, objDenuncia) => {
    var aux = muestraDenuncias;
    if (aux[rut] === undefined) {
      aux[rut] = [objDenuncia];
    } else {
      aux[rut].push(objDenuncia)
    }
    setmuestraDenuncias(aux);
  }

  return (
    <div className='layout'>
      {location.pathname !== '/' && <NavBar isLoged={isLoged} isAdmin={isAdmin} setuserRut={setuserRut} setisLoged={setisLoged}/>}
      <div className='layout__page'>
        <Routes>
          <Route path='/' element={<UserTypeSelection setisAdmin={setisAdmin}/>} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/mis-denuncias' element={<MyReportsPage isLoged={isLoged} setisLoged={setisLoged} userRut={userRut} setuserRut={setuserRut} muestraDenuncias={muestraDenuncias}/>} />
          <Route path='/denunciar' element={<DenunciarPage addElemento={addElemento}/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/detalle-denuncias' element={<ReportDetail isLoged={isLoged} setisLoged={setisLoged} userRut={userRut} setuserRut={setuserRut} />}/>
        </Routes>
      </div>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
