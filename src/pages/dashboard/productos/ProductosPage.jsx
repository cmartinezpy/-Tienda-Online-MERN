import { useState } from 'react'
import { MenuDashboard } from '../../../components/dashboard/MenuDashboard'
import { TableProductos } from '../../../components/dashboard/TableProductos'
import { FormularioNuevoProducto } from '../../../components/dashboard/FormularioNuevoProducto'
import { Header } from '../../../components/comun/Header'

export const ProductosPage = () => {

  const [mostrarForm, setMostrarForm] = useState(false);

  const setMostrarFormulario = () => {
    setMostrarForm(!mostrarForm)
  }

  return (

    <div className='w-full h-auto'>

      {mostrarForm ? (
        <FormularioNuevoProducto setMostrarForm={setMostrarFormulario} />
      ) : (
        <TableProductos setMostrarFormulario={setMostrarFormulario}/>
      )}

      <Header
        isDashboard={true}
        textoBoton={"Logout"}
        titulo="Productos"
      />

      <MenuDashboard />


    </div>
  );

}
