import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { CarritoContext } from '../../contexts/carritoContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CiShoppingCart,CiUser,CiLogout,CiLogin} from "react-icons/ci";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { logoutUser } from '../../actions/authActions';


export const Header = ({ isDashboard, titulo, textoBoton }) => {
  
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);

   // usa un alias para diferenciarlo del estado del otro contexto de autenticacion
  const { state: carritoState, dispatch: carritoDispatch } = useContext(CarritoContext);

  // estado para contar la cantidad de productos en el carrito
  const [carritoItemCount, setCarritoItemCount] = useState(carritoState.carrito.length);

  // estado para mostrar detalle del carrito de compras
  const [ mostrarModalDetalleCar, setMostrarModalDetalleCar] = useState(false);

  // useEffect para actualizar el contador del carrito
  useEffect(() => {
    setCarritoItemCount(carritoState.carrito.reduce((count, item) => count + item.cant, 0));
  }, [carritoState.carrito]);

  // Función para manejar el click en el boton : login/logout
  const handleLoginClick = () => {

    if (textoBoton === "Logout") {
      // Ejecutar acción de logout
      logoutUser( dispatch );
      // Redirigir al home
      navigate('/');
    } else {
      navigate('/login');
    }

  };

  // Función para manejar el click en el boton : flecha de regreso
  const handleBreadcrumbClick = () => {
    navigate('/');
  }

  // Función para mostrar/ocultar el modal del detalle del carrito
  const toggleModal = () => {
    setMostrarModalDetalleCar(!mostrarModalDetalleCar);
  };

  // Función para vaciar el carrito
  const emptyCar = () => {
    carritoDispatch({ type: 'EMPTY_CART' });
  };

  return (
    <header
      className={`fixed top-0 ${
        isDashboard ? "left-20 w-[calc(100%-80px)]" : "left-0 w-full"
      } h-16 bg-black text-white grid grid-cols-3 items-center`}
    >
      <div className="flex justify-start px-4">
        { (!isDashboard && titulo !== "Tienda Online MERN") ? (
          <button
            className="text-white font-bold flex items-center"
            onClick={handleBreadcrumbClick}
          >
            <FaArrowLeft className="mr-2" />
          </button>
        ) : null }
          {state.authenticated && (
            <div className="flex justify-end px-4">
              <div className="text-white text-sm flex items-center space-x-2-sm">
                  <CiUser className='font-bold text-2xl mr-1' /> Bienvenido! {state.email}
              </div>
            </div>
          )}
      </div>
      <div className="flex justify-center">
        {titulo && <h1 className="text-2xl">{titulo}</h1>}
      </div>
      <div className="flex justify-end px-4">
          <div className="relative">
            <CiShoppingCart 
              className="w-7 h-7 font-bold mr-3" 
              onClick={toggleModal} />
            {carritoItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {carritoItemCount}
              </span>
            )}
          </div>
        {textoBoton && (
          <button 
            className="text-white font-bold flex items-center space-x-2"
            onClick={handleLoginClick}
          >
              <>
              { textoBoton === "Logout" ? <CiLogout className="w-5 h-5" /> : <CiLogin className="w-5 h-5" />}
                <span className="inline-block">{textoBoton}</span>
              </>
          </button>
        )}
      </div>


      {/* --------   Modal detalle del carrito  --------  */}
      {mostrarModalDetalleCar && (
        <div className="absolute top-12 right-4 w-80 bg-white border border-gray-300 shadow-lg p-4 rounded-md z-50">
          <h2 className="text-xl font-semibold mb-2 text-gray-600">Carrito de Compras</h2>
          {carritoState.carrito.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {carritoState.carrito.map((item) => (
                <li key={item._id} className="py-2 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium text-cyan-500">{item.nombre}</h3>
                    <p className="text-sm text-gray-500">Cantidad: {item.cant}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-700">${item.precio * item.cant}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">El carrito está vacío</p>
          )}
          <div className="mt-4 flex justify-between">
            <button
              className="w-1/2 bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-700"
              onClick={() => console.log('Ir a pagar')}
            >
              Ir a Pagar
            </button>
            <button
              className="w-1/2 bg-red-500 text-white py-2 rounded-md hover:bg-red-700 ml-2"
              onClick={emptyCar}
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}

    </header>
  );
  
};

Header.propTypes = {
  isDashboard: PropTypes.bool.isRequired,
  titulo: PropTypes.string,
  textoBoton: PropTypes.string,
  detalleProducto: PropTypes.bool,
};