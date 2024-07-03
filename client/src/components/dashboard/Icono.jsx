
import PropTypes from 'prop-types';

export const Icono = (props) => {

  const { visible, setVisible } = props

  return (
    <div 
      className={`flex flex-col fixed top-5 left-5 z-40 p-50`}
      onClick={ () => setVisible(!visible) }
    >
      <div className={`${visible && "rotate-45 translate-y-2"} h-1 w-8 mb-1 bg-white transition duration-500`}></div>
      <div className={`${visible && "rotate-_45"} h-1 w-8 mb-1 bg-white transition duration-500`}></div>
      <div className={`${visible ? "hidden" : "flex"} h-1 w-8 mb-1 bg-white transition duration-500`}></div>
    </div>

  )
}

Icono.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
};



