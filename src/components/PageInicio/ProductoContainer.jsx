import React from 'react'
import { useState } from 'react'
import {db} from '../../data/db'
import { ListCardProductos } from './ListCardProductos'
export const ProductoContainer = () => {

const [data, setData] = useState(db)

  return (
    <>
    <div>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Catalogo de Productos</h1>
       <div class="grid grid-cols-3 gap-3">
       {
        data.map( (producto) => (
           /* <ul>
                <li>{producto.name}</li>
                <li>{producto.description}</li>
                <li>{producto.image}</li>
                <li>*/
              <div>
                    <ListCardProductos />
              </div>
               
        ))}
       </div>
       
    </div>


    </>
   

  )
}
