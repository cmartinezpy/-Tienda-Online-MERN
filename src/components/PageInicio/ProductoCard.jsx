import React from 'react'

export const ProductoCard = ({producto, OnClickSend}) => {
 const {name, image, description, price} = producto

  return (
    <>
      <div
      class="rounded-lg bg-white shadow-secondary-1 dark:bg-surface-darkflex  flex flex-col items-center ">
  
        <img
          class="rounded-t-lg w-48 "
          src={`/img/${image}.jpg`} //src={`/img/${image}.jpg`} alt=""
          alt="imagen guitarra"/>

        <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">{name}</h5>
                
                 <p class="mb-4 text-base"> {description}</p>
                <p className="font-black text-primary text-lg">${price}</p> 
                <div className="flex space-x-4">
                    <button 
                        className="text-blue-500 underline hover:text-blue-700 focus:outline-none"
                        onClick={() => OnClickSend()}>
                        Ver Menos
                    </button>
                    <button
                        type="button"
                        className="bg-red-500 text-white rounded px-8 py-4 hover:bg-red-900"
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>  
        </div>
</>


  )
}
