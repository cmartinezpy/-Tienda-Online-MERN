
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/auth/LoginPage';
import { Dashboard } from './pages/dashboard/Dashboard';
import { HomePage } from './pages/home/HomePage';
import { ProductProvider } from './contexts/productProvider';
import AuthVerificacion from './components/auth/AuthVerificacion';
import { RegistroPage } from './pages/auth/RegistroPage';

function App() {

  return (

    <>

      <ProductProvider> 

        {/* Navegacion de la app */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route element={<AuthVerificacion />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Route>
        </Routes>

      </ProductProvider>

    </>

  )
}

export default App
