import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { CarritoContext } from './carritoContext';
import { carritoReducer } from '../reducers/carritoReducer';

const initialState = {
  carrito: JSON.parse(localStorage.getItem('carrito')) || []
};

export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, initialState);

  return (
    <CarritoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarritoContext.Provider>
  );
};

CarritoProvider.propTypes = {
  children: PropTypes.node.isRequired
};