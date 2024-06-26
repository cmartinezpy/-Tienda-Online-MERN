import { PropTypes } from 'prop-types';

export const Header = ({ isDashboard, titulo, textoBoton }) => {
  return (
    <header
      className={`fixed top-0 ${
        isDashboard ? "left-20 w-[calc(100%-80px)]" : "left-0 w-full"
      } h-16 bg-black text-white grid grid-cols-2 items-center`}
    >

      <div className="flex justify-end">
        {titulo && <h1 className="text-2xl">{titulo}</h1>}
      </div>
      <div className="flex justify-end px-4">
        {textoBoton && (
          <button className="text-white font-bold">{textoBoton}</button>
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