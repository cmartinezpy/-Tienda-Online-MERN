
import { useReducer } from 'react';
import { productoReducer } from '../reducers/productoReducer';
import PropTypes from 'prop-types';
import { ProductContext } from './productContext';

const initialState = {
  products: []
};


// Crea el provider del contexto ( Hace disponible el estado y el dispatch a todos los componentes hijos )
export const ProductProvider = ({ children }) => {
  
    // Usa el reducer para manejar el estado (Pasamos el reducer y el estado inicial)
    const [state, dispatch] = useReducer(productoReducer, initialState);
  
    return (
      <ProductContext.Provider value={{ state, dispatch }}>
        {children}
      </ProductContext.Provider>
    );
  };
  
  
  ProductProvider.propTypes = {
      children: PropTypes.node
  };