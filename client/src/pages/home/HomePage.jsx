
import { useContext } from 'react';
import { Header } from "../../components/comun/Header";
import { ProductoContainer } from "../../components/PageInicio/ProductoContainer";
import { AuthContext } from "../../contexts/authContext";

export const HomePage = () => {

  const { state } = useContext(AuthContext);

  return (

    <div>

        <Header
            isDashboard={false}
            titulo="Tienda Online MERN"
            textoBoton={ state.authenticated ? "Logout" : "Login" }
        />

        <ProductoContainer />
      
    </div>
  )
}
