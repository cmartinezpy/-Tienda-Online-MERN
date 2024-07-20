
import { useContext } from 'react';
import { CarritoContext } from '../contexts/carritoContext';

export const useCarrito = () => {
  const { state, dispatch } = useContext(CarritoContext);

  const addToCart = (producto) => {
    dispatch({ type: 'ADD_TO_CART', payload: producto });
  };

  return {
    carrito: state.carrito,
    addToCart
  };
};