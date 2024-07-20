

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../../utils/cardUtils';


export const ProductoCard = ({producto}) => {

 const {nombre, imagen, descripcion , _id, precio} = producto
 const navigate = useNavigate();

 const { addToCart } = useCarrito();

  const OnClickSend = () => {
    navigate(`/producto/${_id}`);
  }

  return (
    <>
      <div className="rounded-lg bg-white shadow-secondary-1 dark:bg-surface-darkflex  flex flex-col items-center ">
  
        {
          ( imagen === "" || imagen === undefined ) ? (
            <img src={`/img/guitarra_02.jpg`} alt="" className="rounded-t-lg w-48"/>
          ) : (
            <img src={`/img/${imagen}.jpg`} alt="" className="rounded-t-lg w-48" />
          )
        }

        <div className="p-6 text-surface dark:text-white">
          <h5 className="mb-2 text-xl font-medium leading-tight">{nombre}</h5>
          <p className="font-black text-primary text-lg">${precio}</p>
          <p className="text-sm text-gray-500">{descripcion}</p>

          <div className="flex flex-col space-x-4">
            <div className="flex flex-col space-y-4">
                <span
                    className="bg-cyan-100 text-cyan-950 text-center cursor-pointer mt-1 m-2 rounded px-8 py-2 hover:bg-cyan-200"
                    onClick={() => OnClickSend()}
                    >
                    Ver Mas
                </span>

                <button
                    type="button"
                    className="bg-red-500 text-white rounded px-8 py-2 hover:bg-red-900"
                    onClick={() => addToCart(producto)}
                    >
                    Agregar al Carrito
                </button>

            </div>
          </div>

        </div>
      </div>
</>


  )
}

ProductoCard.propTypes = {
  producto: PropTypes.shape({
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    precio: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};
