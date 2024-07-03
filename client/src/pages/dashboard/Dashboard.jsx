
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductosPage } from './productos/ProductosPage';
import { UsuariosPage } from './usuarios/UsuariosPage';

export const Dashboard = () => {
  return (
      <div>

        {/* Navegacion del dashboard */}
        <Routes>
          <Route index element={<Navigate to="productos" />} />
          <Route path="productos" element={<ProductosPage />} />
          <Route path="usuarios" element={<UsuariosPage />} />
        </Routes>

      </div>
  );
};