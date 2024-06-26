
import { MenuDashboard } from '../../components/dashboard/MenuDashboard'
import { TableProductos } from '../../components/dashboard/TableProductos'
import { Header } from '../../components/comun/Header'

export const ProductosPage = () => {
  return (
    <div>
        <Header isDashboard={true} textoBoton={'Logout'} titulo="Lista de Productos"></Header>
        <MenuDashboard></MenuDashboard>     
        <TableProductos></TableProductos>
    </div>
  )
}
