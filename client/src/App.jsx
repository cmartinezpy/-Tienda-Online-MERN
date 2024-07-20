
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/auth/LoginPage';
import { Dashboard } from './pages/dashboard/Dashboard';
import { HomePage } from './pages/home/HomePage';
import { ProductoDetalle } from './pages/home/ProductoDetalle';
import { ProductProvider } from './contexts/productProvider';
import { CarritoProvider } from './contexts/carritoProvider';
import AuthVerificacion from './components/auth/AuthVerificacion';
import { RegistroPage } from './pages/auth/RegistroPage';

function App() {

  return (

    <>

      <ProductProvider> 
        <CarritoProvider>

          {/* Navegacion de la app */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegistroPage />} />
            <Route element={<AuthVerificacion />}>
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Route>
          </Routes>

        </CarritoProvider>

      </ProductProvider>

    </>

  )
}

export default App
