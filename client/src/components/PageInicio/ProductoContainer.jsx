
import { useContext, useEffect } from "react";
import { ListCardProductos } from "./ListCardProductos";
import { ProductContext } from "../../contexts/productContext";
import { getProductosHome } from "../../actions/productActions";


export const ProductoContainer = () => {

  const { state, dispatch } = useContext(ProductContext);

  console.log(state)

  useEffect(() => {
    getProductosHome(dispatch);
  }, [dispatch]);


  return (
    <>

      <div className="mt-16 p-1">
        <h1 className="mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Catalogo de Productos
        </h1>
        <div className="grid grid-cols-3 gap-3">
          {state.products.map((producto) => (
            <div key={producto.id}>
              <ListCardProductos key={producto.id} producto={producto} />
            </div>
          ))}
        </div>
      </div>
    </>
  );

};
