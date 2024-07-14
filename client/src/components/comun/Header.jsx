import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CiShoppingCart,CiUser,CiLogout,CiLogin} from "react-icons/ci";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { logoutUser } from '../../actions/authActions';


export const Header = ({ isDashboard, titulo, textoBoton }) => {
  
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);

  const handleLoginClick = () => {

    if (textoBoton === "Logout") {
      // Ejecutar acción de logout
      logoutUser( dispatch );
      // Redirigir al home
      navigate('/');
    } else if (!isDashboard && (titulo === "Login" || titulo === "Registro")) {
      // Redirigir al home
      navigate('/');
    } else {
      navigate('/login');
    }

  };

  return (
    <header
      className={`fixed top-0 ${
        isDashboard ? "left-20 w-[calc(100%-80px)]" : "left-0 w-full"
      } h-16 bg-black text-white grid grid-cols-3 items-center`}
    >
      <div className="flex justify-start px-4">
        { (!isDashboard && ( titulo=="Login" || titulo=="Registro" ) ) ? (
          <button
            className="text-white font-bold flex items-center"
            onClick={handleLoginClick}
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
        { (!isDashboard && titulo === "Tienda Online MERN") 
            ? <CiShoppingCart className="w-7 h-7 font-bold mr-3" /> 
            : null }
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
    </header>
  );
  
};

Header.propTypes = {
  isDashboard: PropTypes.bool.isRequired,
  titulo: PropTypes.string,
  textoBoton: PropTypes.string
};