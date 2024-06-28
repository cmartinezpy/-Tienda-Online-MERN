// import { useState } from 'react';
// import {db} from './data/db'
// import { Footer } from './components/comun/Footer';

import './App.css'
import { Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/auth/LoginPage';
import { Dashboard } from './pages/dashboard/Dashboard';
import { HomePage } from './pages/home/HomePage';

function App() {

  return (

    <>

      {/* Navegacion de la app */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

    </>

  )
}

export default App
