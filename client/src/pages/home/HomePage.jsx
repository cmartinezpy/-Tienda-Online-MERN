
import { Header } from "../../components/comun/Header";
import { ProductoContainer } from "../../components/PageInicio/ProductoContainer";

export const HomePage = () => {

  return (

    <div>

        <Header
            isDashboard={false}
            titulo="Tienda Online MERN"
            textoBoton={"Login"}
        />

        <ProductoContainer />
      
    </div>
  )
}
