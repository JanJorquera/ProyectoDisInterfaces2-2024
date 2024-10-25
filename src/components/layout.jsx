import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/nav_bar';
import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page';
import MyReportsPage from '../pages/myreports_page.jsx';
import DenunciarPage from '../pages/denunciar_page';
import AboutPage from '../pages/about_page';
import Footer from '../components/footer';

const Layout = () => {
  const [isLoged, setisLoged] = useState(false);
  const [userRut, setuserRut] = useState("");
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/mis-denuncias' element={<MyReportsPage isLoged={isLoged} setisLoged={setisLoged} userRut={userRut} setuserRut={setuserRut}/>} />
            <Route path='/denunciar' element={<DenunciarPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
