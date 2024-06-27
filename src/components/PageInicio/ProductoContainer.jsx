import React from 'react'
import { useState } from 'react'
import {db} from '../../data/db'
import { ListCardProductos } from './ListCardProductos'
import {Header} from '../comun/Header'
export const ProductoContainer = () => {

const [data, setData] = useState(db)
const[cart, setCart] = useState([]);



  return (
    <>
   <div>
      <Header />

   </div>

    <div>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Catalogo de Productos</h1>
       <div class="grid grid-cols-3 gap-3">
       {
        data.map( (producto) => (
              <div>
                    <ListCardProductos 
                      key={producto.id}
                      producto ={producto}

                    />
              </div>
               
        ))}
       </div>
       
    </div>


    </>
   

  )
}
