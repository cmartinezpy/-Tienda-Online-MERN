

export function usuarioReducer(state, action){

      // Acciones del Reducer
      switch(action.type) {

        case 'ADD_USUARIO': // Ruta Protegida
            return {
                ...state,
                usuario: [...state.usuario, action.payload]
            };
        case 'SET_USUARIO_DASHBOARD': // Ruta Protegida
            return {
                ...state,
                usuario: action.payload
            };
            case 'DELETE_USUARIO': // Ruta Protegida
            return {
              ...state,
              usuario: state.usuario.filter(usuario => usuario._id !== action.payload)
            };
          case 'EDIT_USUARIO': // Ruta Protegida
            return {
              ...state,
              usuario: state.usuario.map(product => 
                usuario._id === action.payload._id ? action.payload : usuario
              )
            };
        default:
            return state;

    }



}