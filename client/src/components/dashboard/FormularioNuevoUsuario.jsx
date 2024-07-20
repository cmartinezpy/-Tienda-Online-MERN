import PropTypes from 'prop-types';
import {useState, useContext } from 'react';
import {addUsuarioDashboard} from '../../actions/usuarioActions'
import {usuarioContext} from '../../contexts/usuarioContext'

export const FormularioNuevoUsuario = ({ setMostrarForm }) => {

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rol, setRol] = useState('');
  const [password, setPassword] = useState('');
  const [activo, setActivo]= useState('');

  const {dispatch} = useContext(usuarioContext);
  
  const handleSubmit = async (e) => {

    e.preventDefault();

    const usuarios= {
      nombre,
      apellido,
      email,
      telefono,
      rol,
      password,
      activo,
    }

    await addUsuarioDashboard(dispatch, usuarios);

    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');
    setRol('');
    setPassword('');
    setActivo('');

    //Cerrar el formulario Usuario
    setMostrarForm();
  };
 
  return (

    <div id="" className="bg-white p-5 m-5 border-r-2 w-full max-w-screen-lg min-w-[320px] lg:min-w-[1000px]">
      <h1 id="" className="text-gray-600 font-bold mb-12 divide-y divide-gray-200">
        Nuevo Usuario
      </h1>

      <form className="max-w-md mx-auto min-w-[100px] lg:min-w-[600px]"
        onSubmit={handleSubmit}
        >
        <div className="grid md:grid-cols-2 md:gap-6">
          
          {/* Input nombre usuario */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_nombre"
              id="floating_nombre"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
              required=""
              onChange={(e) => setNombre(e.target.value)}
            />
            <label
              htmlFor="floating_nombre"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Nombre
            </label>
          </div>

          {/* Input apellido */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_categoria"
              id="floating_categoria"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
              required=""
              onChange={(e) => setApellido(e.target.value)}
            />
            <label
              htmlFor="floating_categoria"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Apellido
            </label>
          </div>

        </div>

        {/* Email  */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            name="floating_descripcion"
            id="floating_descripcion"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
            placeholder=" "
            required=""
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label
            htmlFor="floating_descripcion"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
          >
            Email
          </label>
        </div>

        {/* Input Usuario */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_precio"
              id="floating_precio"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
              required=""
              onChange={(e) => setTelefono(e.target.value) }
            />
            <label
              htmlFor="floating_precio"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Teléfono
            </label>
          </div>

          {/* Input contraseña */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="floating_password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Contraseña
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_precio"
              id="floating_precio"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
              required=""
              onChange={(e) => setRol(e.target.value)}
            />
            <label
              htmlFor="floating_precio"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Rol
            </label>
          </div>

          {/* Input Estado */}
          <div className="relative z-0 w-full mb-5 group mt-3">
            <div className="flex items-center">
              <label htmlFor="switch-activo" className="mr-3 text-sm text-gray-500 dark:text-gray-400">
                Estado
              </label>
              <div className="relative">
                <input
                  type="checkbox"
                  id="switch-activo"
                  className="sr-only"
                  checked={activo}
                  onChange={() => setActivo(!activo)}
                />
                <div className="block bg-gray-200 w-14 h-8 rounded-full"
                onClick={() => setActivo(!activo)}></div>
                <div 
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                    activo ? 'transform translate-x-6 bg-cyan-400' : ''
                  }`}
                  onClick={() => setActivo(!activo)}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="reset"
          className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:bg-red-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-1"
          onClick={setMostrarForm}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:bg-cyan-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
        >
          Agregar
        </button>
      </form>
    </div>
  );

};

FormularioNuevoUsuario.propTypes = {
  setMostrarForm: PropTypes.func.isRequired
}


