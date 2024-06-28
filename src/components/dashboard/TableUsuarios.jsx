import  PropTypes  from 'prop-types';

export const TableUsuarios = ( { setMostrarFormulario }) => {

  const usuarios = [
    {
      id: 1,
      nombre: 'Usuario 1',
      apellido: 'Apellido 1',
      usuario: 'usuario.1',
      email: 'usuario1@user.com',
      password: '123456',
      rol: 'Admin',
      estado: 'Activo'
    },
    {
        id: 2,
        nombre: 'Usuario 2',
        apellido: 'Apellido 2',
        usuario: 'usuario.1',
        email: 'usuario2@user.com',
        password: '123456',
        rol: 'Vendedor',
        estado: 'Activo'
    },
    {
        id: 3,
        nombre: 'Usuario 3',
        apellido: 'Apellido 3',
        usuario: 'usuario.1',
        email: 'usuario3@user.com',
        password: '123456',
        rol: 'Partner',
        estado: 'Activo'
    },
  ]


  return (

    <div className="flex flex-col w-full">

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div className="bg-white p-5 m-5 border-r-2 w-full max-w-screen-lg min-w-[320px] lg:min-w-[1000px]">

            <div className="flex justify-end items-center mb-4 m-3">
              <button 
                onClick={setMostrarFormulario}
                className="px-4 py-2 bg-cyan-500 text-white font-medium text-sm rounded-lg hover:bg-cyan-700 cursor-pointer"
              >Nuevo Usuario</button>
            </div>
            

            <table className="min-w-full divide-y divide-gray-200 pl-5 pr-5">

              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-normal text-gray-500 uppercase tracking-wider"
                  >
                    Nombre Completo
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-normal text-gray-500 uppercase tracking-wider"
                  >
                    Usuario
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-normal text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-normal text-gray-500 uppercase tracking-wider"
                  >
                    Rol
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-normal text-gray-500 uppercase tracking-wider"
                  >
                    Estado
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-normal text-gray-500 uppercase tracking-wider"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">

                {usuarios.map(user => (

                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img className="h-12 w-12 rounded-full" src={user.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-normal text-gray-900">{user.nombre} {user.apellido}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.usuario}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.rol}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-sm leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        {user.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-normal">
                      <button className="bg-red-500 rounded-full pl-3 pr-3 pt-1 pb-1"> X </button>
                    </td>
                  </tr>

                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
  );

};

// Declara las propiedades que recibe el componente
TableUsuarios.propTypes = {
  setMostrarFormulario: PropTypes.func.isRequired
};