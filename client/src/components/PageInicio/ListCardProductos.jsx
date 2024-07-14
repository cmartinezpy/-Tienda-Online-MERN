
import { useState } from 'react'
import PropTypes from 'prop-types'
import { ProductoCard } from './ProductoCard'

export const ListCardProductos = ({ producto }) => {

 const { nombre, precio, imagen, descripcion } = producto

 const[estado, setEstado] = useState (false)

 const OnClickSend = () =>{

    setEstado(!estado)
 }

 if(estado){
  return <ProductoCard
   producto={producto}
   OnClickSend = {OnClickSend}
   />
 }
  return (
    <>
      <div className="rounded-lg bg-white shadow-secondary-1 dark:bg-surface-darkflex  flex flex-col items-center ">
        {imagen === "" ? ( 
            <img
                className="rounded-t-lg w-48 "
                src={`/img/guitarra_02.jpg`}
                alt=""
        /> ) : (
            <img
                className="rounded-t-lg w-48 "
                src={`/img/${imagen}.jpg`}
                alt=""
            />
        )}

        <div className="p-6 text-surface dark:text-white">
          <h5 className="mb-2 text-xl font-medium leading-tight">{nombre}</h5>
          <p className="font-black text-primary text-lg">${precio}</p>
          <p className="text-sm text-gray-500">{descripcion}</p>

          <div className="flex flex-col space-x-4">
            <div className="flex flex-col space-y-4">
                <span
                    className="text-blue-500 hover:text-blue-700 focus:outline-none text-center cursor-pointer mt-1"
                    onClick={() => OnClickSend()}
                    >
                    Ver Mas
                </span>

                <button
                    type="button"
                    className="bg-red-500 text-white rounded px-8 py-2 hover:bg-red-900"
                    >
                    Agregar al Carrito
                </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

ListCardProductos.propTypes = {
  producto: PropTypes.object.isRequired
}
