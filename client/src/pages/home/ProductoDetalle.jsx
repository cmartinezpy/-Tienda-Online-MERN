
import { Header } from '../../components/comun/Header';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/productContext';
import { getProductoDetalle } from '../../actions/productActions';
import { AuthContext } from "../../contexts/authContext";

export const ProductoDetalle = () => {

    const { id } = useParams();
    const { state, dispatch } = useContext(ProductContext);
    const { state: authState } = useContext(AuthContext);
    const { productoDetalle } = state;

    useEffect(() => {
        getProductoDetalle(dispatch, id);
    }, [dispatch, id]);
    
    if (!productoDetalle) {
    return <div>Cargando...</div>;
    }

  return (
    <>
        <Header
            isDashboard={false}
            titulo= {`Detalle de ${productoDetalle.nombre}`}
            textoBoton={ authState.authenticated ? "Logout" : "Login" }
        />
        
        <div>

            <div className="bg-gray-100 flex justify-around items-center h-screen mt-12 w-full max-w-screen-lg min-w-[320px] lg:min-w-[1000px]">
            
                <img src={`/img/guitarra_02.jpg`} alt="" className="rounded-lg w-48"/>

                <div className="p-6 text-surface dark:text-white">
                    <h5 className="mb-2 text-xl font-medium leading-tight mt-5">{productoDetalle.nombre}</h5>
                    <p className="font-black text-primary text-lg mt-5">${productoDetalle.precio}</p>
                    <p className="text-sm text-gray-500 mt-5">{productoDetalle.descripcion}</p>
                    <span className="mt-5">Cantidad disponible: {productoDetalle.cantidad}</span>

                    <div className="flex flex-col space-x-4 mt-10">
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
  )
}
