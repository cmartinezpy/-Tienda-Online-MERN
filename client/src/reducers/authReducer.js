

// Reducer for authentication
export function authReducer(state, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                authenticated: true,
                email: action.payload.email,
                rol: action.payload.rol
            };
        case 'LOGOUT':
            return {
                ...state,
                authenticated: false,
                email: '',
                rol: ''
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                registerSuccess: true,
            };
        case 'REGISTER_FAIL':
            return {
                ...state,
                registerSuccess: false,
                registerError: action.payload,
            };
        default:
            return state;
    }
}