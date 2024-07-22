
const API_URL = 'https://tienda-online-mern-api.vercel.app';

// Aca se crean las acciones que se van a utilizar en el reducer. 
// Realiza la peticion al servidor y actualiza el estado del reducer.

// Obtiene todos los usuarios


export const getUsuariosDashboard= async ( dispatch ) => {

    try {

      const token = localStorage.getItem('jwt');

      const response = await fetch(`${API_URL}/usuario`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        dispatch({ type: 'SET_USUARIO_DASHBOARD', payload: data });
      } else {
        console.error('Error al obtener los usuarios', data);
      }
    } catch (error) {
      console.error('Error:', error);
    } 
};

export const deleteUsuarioDashboard = async (dispatch, id) => {

    try {

      const token = localStorage.getItem('jwt');

      const response = await fetch(`${API_URL}/usuario/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
      });
  
      if (response.ok) {
        dispatch({ type: 'DELETE_USUARIO', payload: id });
      } else {
        const data = await response.json();
        console.error('Error al eliminar el usuario', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



//Agregar Usuarios al Dashboard
  export const addUsuarioDashboard = async (dispatch, usuario) => {

    try {

      const token = localStorage.getItem('jwt');
      console.log(usuario);

      const response = await fetch(`${API_URL}/usuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(usuario)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        dispatch({ type: 'ADD_USUARIO', payload: data });
      } else {
        console.error('Error al crear el usuario', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };