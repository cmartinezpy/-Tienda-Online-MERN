
import { Header } from "../../components/comun/Header";
import { FormularioRegistro } from "../../components/auth/FormularioRegitro";

export const RegistroPage = () => {
  return (
    <div>

        <Header
            isDashboard={false}
            titulo="Registro"
        />

        <FormularioRegistro />
      
    </div>
  )
}
