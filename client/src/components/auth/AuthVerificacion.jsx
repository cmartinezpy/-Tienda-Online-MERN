

import  { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';

const AuthVerificacion = () => {
  
  const { state } = useContext(AuthContext);

  // Si no esta autenticado, redirigir a la pagina de login
  if ( !state.authenticated ) {

    return <Navigate to="/login" replace />;

  } else if( state.authenticated && state.rol === 'cliente') {

     // Si esta autenticado y es un cliente, redirigir a la pagina de home
    return <Navigate to="/" replace />;
    
  }

  return (

      <Outlet />

  );
};

export default AuthVerificacion;