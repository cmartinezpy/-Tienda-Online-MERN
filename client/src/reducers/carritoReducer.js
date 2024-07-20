

export const carritoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const updatedCart = [...state.carrito];
            const existingProductIndex = updatedCart.findIndex(item => item._id === action.payload._id);
            if (existingProductIndex !== -1) {
                updatedCart[existingProductIndex].cant += 1;
            } else {
                updatedCart.push({ ...action.payload, cant: 1 });
            }
            localStorage.setItem('carrito', JSON.stringify(updatedCart));
            return { ...state, carrito: updatedCart };
        }
        case 'EMPTY_CART': {
            localStorage.removeItem('carrito');
            return { ...state, carrito: [] };
        }
        default:
            return state;
    }
};


