
// Aca se crean las acciones que se van a utilizar en el reducer. 
// Realiza la peticion al servidor y actualiza el estado del reducer.

// Obtiene todos los usuarios


export const getUsuariosDashboard= async ( dispatch ) => {

    try {

      const response = await fetch(`http://localhost:3001/usuario`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
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
      const response = await fetch(`http://localhost:3001/usuario/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
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
      const response = await fetch(`http://localhost:3001/usuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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