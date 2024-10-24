import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import DenunciarPage from '../pages/denunciar_page';
import AboutPage from '../pages/about_page';
import NavBar from '../components/nav_bar';
import Footer from '../components/footer';

const Layout = () => {
  
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
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
