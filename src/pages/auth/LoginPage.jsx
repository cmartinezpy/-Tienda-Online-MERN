import { Header } from "../../components/comun/Header";
import { FormularioLogin } from "../../components/auth/FormularioLogin";

export const LoginPage = () => {
  return (
    <div>

        <Header
            isDashboard={false}
            titulo="Login"
        />

        <FormularioLogin />

      
    </div>
  )
}

