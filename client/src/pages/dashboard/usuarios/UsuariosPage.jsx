import { useState } from 'react'
import { MenuDashboard } from '../../../components/dashboard/MenuDashboard'
import { TableUsuarios } from '../../../components/dashboard/TableUsuarios'
import { FormularioNuevoUsuario } from '../../../components/dashboard/FormularioNuevoUsuario'
import { Header } from '../../../components/comun/Header'

export const UsuariosPage = () => {

  const [mostrarForm, setMostrarForm] = useState(false);

  const setMostrarFormulario = () => {
    setMostrarForm(!mostrarForm)
  }

  return (

    <div className='w-full h-auto'>

      {mostrarForm ? (
        <FormularioNuevoUsuario setMostrarForm={setMostrarFormulario} />
      ) : (
        <TableUsuarios setMostrarFormulario={setMostrarFormulario}/>
      )}

      <Header
        isDashboard={true}
        textoBoton={"Logout"}
        titulo="Usuarios"
      />

      <MenuDashboard />


    </div>
  );

}
