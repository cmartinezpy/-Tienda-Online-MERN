import { useReducer } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './authContext'
import { authReducer } from '../reducers/authReducer'


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

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
};
