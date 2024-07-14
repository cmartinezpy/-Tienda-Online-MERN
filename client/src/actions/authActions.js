import { jwtDecode } from "jwt-decode";


export const loginUser = async (credentials, dispatch) => {

    const path = 'http://localhost:3001/login';
    const body = credentials; // { email: '', password: ''}
    // enviar la consulta al servidor
    fetch( path, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body)
                }
            )
    .then(response => response.json())
    .then(data => {
        if(data.ok === true) {
            // recibir el token de la respuesta del servidor
            const token = data.token;
            // guardar el token en el window.localStorage 
            localStorage.setItem('jwt', token);
            const decodedToken = jwtDecode(token); // { email: 'email del usuario'}
            dispatch({
                type: 'LOGIN',
                payload: {
                    email: decodedToken.email,
                    rol: decodedToken.rol
                }
            });
            return 'done';
        } else {
            // si hay un error, setear el currentUser a un objeto vacio
            dispatch({
                type: 'LOGOUT',
                payload: {
                    email: '',
                    rol: ''
                }
            });
            return 'error';
        }
    })
}

// esta accion va a borrar el token del localStorage y va a mandar un currentUser vacio al dispatch
export const logoutUser = (dispatch) => {
    localStorage.removeItem('jwt');
    dispatch({
        type: 'LOGOUT',
        payload: {
            email: ''
        }
    });
};


// Accion para registrar un usuario
export const registerUser = async (registerData, dispatch) => {
    
    const path = 'http://localhost:3001/registro';
    
    try {
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      
      const data = await response.json();
      
      if (data.ok === true) {
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: data,
        });
        return 'done';
      } else {
        dispatch({
          type: 'REGISTER_FAIL',
          payload: data.error,
        });
        return 'error';
      }
    } catch (error) {
      console.error('Error registrando usuario:', error);
      throw error;
    }
  };