import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { registerUser } from '../../actions/authActions';

export const FormularioRegistro = () => {

  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { dispatch } = useContext(AuthContext);

  // Función para cancelar el registro
  const handleCancelarRegistro = () => {
    navigate('/');
  };

  // Función para manejar el envío del formulario
  const handleSubmitRegistroForm = async (e) => {
    e.preventDefault();

    // Validar los campos
    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErrorMessage('Los campos Email, Contraseña y Confirmar Contraseña son obligatorios');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    // Enviar los datos al servidor
    const registerData = { nombre, apellido, email, password };

    setErrorMessage('');

    try {
      await registerUser(registerData, dispatch);
      navigate('/login');
    } catch (error) {
      setErrorMessage('Error al registrar. Por favor, intenta nuevamente.');
    }

  };

  return (
    <div className="bg-white p-5 m-5 mt-12 border-r-2 w-full max-w-screen-lg min-w-[100px] lg:min-w-[300px]">
      <h1 className="text-gray-600 font-bold mb-12 divide-y divide-gray-200">
        Ingresa tus datos
      </h1>

      <form className="max-w-md mx-auto min-w-[100px] lg:min-w-[300px]" onSubmit={handleSubmitRegistroForm}>
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
              value={nombre}
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
              value={apellido}
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
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
            placeholder=" "
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
            placeholder=" "
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="floating_password"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
          >
            Contraseña
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_confirm_password"
            id="floating_confirm_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
            placeholder=" "
            required=""
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label
            htmlFor="floating_confirm_password"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
          >
            Confirmar Contraseña
          </label>
        </div>
        {errorMessage && <p className="text-red-500 text-sm mb-5">{errorMessage}</p>}
        <button
          type="reset"
          className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:bg-red-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-1 mt-4"
          onClick={handleCancelarRegistro}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:bg-cyan-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-4"
        >
          Registrar
        </button>
      </form>
    </div>
  );

};