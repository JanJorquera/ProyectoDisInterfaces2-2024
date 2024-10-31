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

const Layout = () => {
  const [isLoged, setisLoged] = useState(false);
  const [userRut, setuserRut] = useState("");
  const location = useLocation();

  return (
    <div className='layout'>
      {location.pathname !== '/' && <NavBar />}
      <div className='layout__page'>
        <Routes>
          <Route path='/' element={<UserTypeSelection />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/mis-denuncias' element={<MyReportsPage isLoged={isLoged} setisLoged={setisLoged} userRut={userRut} setuserRut={setuserRut}/>} />
          <Route path='/denunciar' element={<DenunciarPage />} />
          <Route path='/about' element={<AboutPage />} />
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
