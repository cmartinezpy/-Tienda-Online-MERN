

export function productoReducer( state, action ) {

    // Acciones del Reducer
    switch(action.type) {

        case 'ADD_PRODUCTO': // Ruta Protegida
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case 'SET_PRODUCTOS_DASHBOARD': // Ruta Protegida
            return {
                ...state,
                products: action.payload
            };
        case 'SET_PRODUCTOS_HOME':
            return {
                ...state,
                products: action.payload
            };
        case 'SET_PRODUCTO_HOME':
            return {
                ...state,
                products: action.payload
            };
        case 'DELETE_PRODUCTO': // Ruta Protegida
            return {
              ...state,
              products: state.products.filter(product => product._id !== action.payload)
            };
        case 'EDIT_PRODUCTO': // Ruta Protegida
            return {
              ...state,
              products: state.products.map(product => 
                product._id === action.payload._id ? action.payload : product
              )
            };
        default:
            return state;

    }
    
}