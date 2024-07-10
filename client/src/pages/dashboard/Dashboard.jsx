
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductosPage } from './productos/ProductosPage';
import { UsuariosPage } from './usuarios/UsuariosPage';
import { ProductProvider } from '../../contexts/productProvider';

export const Dashboard = () => {
  return (
    <ProductProvider>
      <div>
        {/* Navegacion del dashboard */}
        <Routes>
          <Route index element={<Navigate to="productos" />} />
          <Route path="productos" element={<ProductosPage />} />
          <Route path="usuarios" element={<UsuariosPage />} />
        </Routes>
      </div>
    </ProductProvider>
  );
};