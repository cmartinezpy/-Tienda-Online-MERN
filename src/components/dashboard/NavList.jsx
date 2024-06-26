import PropTypes from 'prop-types';

export const NavList = (props) => {
  const { visible } = props;

  return (
    <div className="flex relative">
      <ul
        className={`
            ${ visible ? "w-full sm:w-48" : "w-0"} 
            transition-width duration-500 flex flex-col font-bold h-screen fixed pt-20 left-8 top-16 bg-half-transparente items-center`}
      >
        <li
          className={
            `${visible ? "flex" : "hidden"}
            text-white hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}
        >
          Productos
        </li>
        <li
          className={`
            ${visible ? "flex" : "hidden"}
            text-white hover:text-salmon w-full sm:w-32m-1 p-5 justify-center`}
        >
          Usuarios
        </li>
      </ul>
    </div>
  );
};

NavList.propTypes = {
  visible: PropTypes.bool.isRequired,
};

