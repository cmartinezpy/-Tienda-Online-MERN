import React from 'react'

export const ListCardProductos = ({producto}) => {
 const {name, image, description, price} = producto
 //console.log(producto)
  return (
    <>
      <div
      class="rounded-lg bg-white shadow-secondary-1 dark:bg-surface-darkflex  flex flex-col items-center ">
  
        <img
          class="rounded-t-lg w-48 "
          src={`/img/${image}.jpg`} //src={`/img/${image}.jpg`} alt=""
          alt="imagen guitarra"/>

      <div class="p-6 text-surface dark:text-white">
        <h5 class="mb-2 text-xl font-medium leading-tight">{name}</h5>
        <p class="mb-4 text-base">
         {description}
        </p>
        <p class="font-black text-primary text-lg">${price}</p>
        <button
          type="button"
          className= "bg-red-500 text-white rounded px-8 py-4 hover:bg-red-900"
          
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
</>
  )
}
