
import { Header } from "../../components/comun/Header";
import { ProductoContainer } from "../../components/PageInicio/ProductoContainer";

export const HomePage = () => {

  return (

    <div>

        <Header
            isDashboard={false}
            titulo="Inicio"
            textoBoton={"Login"}
        />

        <ProductoContainer />
      
    </div>
  )
}
