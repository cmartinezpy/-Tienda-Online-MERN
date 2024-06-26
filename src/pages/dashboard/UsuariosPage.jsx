import { MenuDashboard } from '../../components/dashboard/MenuDashboard'
import { Header } from '../../components/comun/Header'

export const UsuariosPage = () => {
  return (
    <div>   
      <Header isDashboard={true} textoBoton={'Logout'} titulo="Lista de Usuarios"></Header>
      <MenuDashboard></MenuDashboard>
    </div>
  )
}
