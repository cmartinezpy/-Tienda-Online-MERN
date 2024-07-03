import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const Header = ({ isDashboard, titulo, textoBoton }) => {
  
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if ( textoBoton === "Logout" || ( !isDashboard && titulo=="Login" )) {
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
        { (!isDashboard && titulo=="Login") ? (
          <button
            className="text-white font-bold flex items-center"
            onClick={handleLoginClick}
          >
            <FaArrowLeft className="mr-2" />
          </button>
        ) : null }
      </div>
      <div className="flex justify-center">
        {titulo && <h1 className="text-2xl">{titulo}</h1>}
      </div>
      <div className="flex justify-end px-4">
        {textoBoton && (
          <button 
            className="text-white font-bold"
            onClick={handleLoginClick}
          >
            {textoBoton}
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