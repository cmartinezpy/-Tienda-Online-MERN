import { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './authContext'
import { authReducer } from '../reducers/authReducer'
import { jwtDecode } from "jwt-decode";


const initialValue = { 
  authenticated: false,
  email: '',
  rol: '',
  registerSuccess: null,
  registerError: null,
}

// Crea el provider del contexto ( Hace disponible el estado y el dispatch a todos los componentes hijos )
export const AuthProvider = ({ children }) => {

    // Usa el reducer para manejar el estado (Pasamos el reducer y el estado inicial)
    const [state, dispatch] = useReducer(authReducer, initialValue);

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
          const decodedToken = jwtDecode(token);
          dispatch({
            type: 'LOGIN',
            payload: {
              email: decodedToken.email,
              rol: decodedToken.rol
            }
          });
        }
      }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
};
