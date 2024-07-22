
const API_URL = import.meta.env.VITE_API_URL;

// Aca se crean las acciones que se van a utilizar en el reducer. 
// Realiza la peticion al servidor y actualiza el estado del reducer.

// Obtiene todos los productos para el dashboard - Ruta protegida
export const getProductosDashboard = async ( dispatch ) => {

    try {

      const token = localStorage.getItem('jwt');

      const response = await fetch(`${API_URL}/dashboard/productos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        dispatch({ type: 'SET_PRODUCTOS_DASHBOARD', payload: data });
      } else {
        console.error('Error al obtener los productos', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
};


// Elimina un producto del dashboard - Ruta protegida
export const deleteProductoDashboard = async (dispatch, id) => {

  try {

    const token = localStorage.getItem('jwt');

    const response = await fetch(`${API_URL}/dashboard/producto/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (response.ok) {
      dispatch({ type: 'DELETE_PRODUCTO', payload: id });
    } else {
      const data = await response.json();
      console.error('Error al eliminar el producto', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


// Crea un producto en el dashboard - Ruta protegida
export const addProductoDashboard = async (dispatch, producto) => {

  try {

    const token = localStorage.getItem('jwt');

    const response = await fetch(`${API_URL}/dashboard/producto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(producto)
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'ADD_PRODUCTO', payload: data });
    } else {
      console.error('Error al crear el producto', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


// Obtiene los productos para la home - Ruta publica
export const getProductosHome = async (dispatch) => {
  try {

    const response = await fetch(`${API_URL}/productos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();

    if (response.ok) {
      
      localStorage.setItem('productos_home', JSON.stringify(data));
      dispatch({ type: 'SET_PRODUCTOS_HOME', payload: data });

    } else {
      console.error('Error al obtener los productos', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}


// Obtiene un producto en detalle - Ruta publica
export const getProductoDetalle = async (dispatch,id) => {

  try {

    const response = await fetch(`${API_URL}/producto/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'SET_PRODUCTO_DETALLE', payload: data });
    } else {
      console.error('Error al obtener el producto', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}