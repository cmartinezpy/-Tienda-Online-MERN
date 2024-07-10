

// Aca se crean las acciones que se van a utilizar en el reducer. 
// Realiza la peticion al servidor y actualiza el estado del reducer.

// Obtiene todos los productos
export const getProductosDashboard = async ( dispatch ) => {

    try {

      const response = await fetch(`http://localhost:3001/dashboard/productos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
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


// Elimina un producto del dashboard
export const deleteProductoDashboard = async (dispatch, id) => {
  try {
    const response = await fetch(`http://localhost:3001/dashboard/producto/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
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


// Crea un producto en el dashboard
export const addProductoDashboard = async (dispatch, producto) => {
  try {
    const response = await fetch(`http://localhost:3001/dashboard/producto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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