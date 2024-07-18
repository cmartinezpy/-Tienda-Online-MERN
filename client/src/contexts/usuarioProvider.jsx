
import { useReducer } from 'react';
import { usuarioReducer } from '../reducers/usuarioReducer';
import PropTypes from 'prop-types';
import { usuarioContext } from './usuarioContext';

const initialState = {
  usuario: []
};

// Crea el provider del contexto ( Hace disponible el estado y el dispatch a todos los componentes hijos )
export const UsuarioProvider = ({ children }) => {
  
    // Usa el reducer para manejar el estado (Pasamos el reducer y el estado inicial)
    const [state, dispatch] = useReducer(usuarioReducer, initialState);
  
    return (
      <usuarioContext.Provider value={{ state, dispatch }}>
        {children}
      </usuarioContext.Provider>
    );
  };
  
  
  UsuarioProvider.propTypes = {
      children: PropTypes.node
  };