import { jwtDecode } from "jwt-decode";
const API_URL = import.meta.env.VITE_API_URL;


export const loginUser = async (credentials, dispatch) => {
  const path = `${API_URL}/login`;
  const body = credentials; // { email: '', password: ''}

  try {
      const response = await fetch(path, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
      });

      // Verificar si la respuesta no es OK
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.ok === true) {
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
          throw new Error(data.error || 'Error logging in');
      }
  } catch (error) {
      dispatch({
          type: 'LOGOUT',
          payload: {
              email: '',
              rol: ''
          }
      });
      return 'error';
  }
};

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
    
    const path = `${API_URL}/registro`;
    
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