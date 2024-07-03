// import React from 'react'
import { useState } from "react";
import { db } from "../../data/db";
import { ListCardProductos } from "./ListCardProductos";
import { Header } from "../comun/Header";


export const ProductoContainer = () => {

  const [data, setData] = useState(db);
  // const[cart, setCart] = useState([]);

  return (
    <>

      <div className="mt-16 p-1">
        <h1 className="mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Catalogo de Productos
        </h1>
        <div className="grid grid-cols-3 gap-3">
          {data.map((producto) => (
            <div key={producto.id}>
              <ListCardProductos key={producto.id} producto={producto} />
            </div>
          ))}
        </div>
      </div>
    </>
  );

};
