
import PropTypes from 'prop-types';

export const FormularioNuevoProducto = ({ setMostrarForm }) => {
  console.log(setMostrarForm);

  return (

    <div id="" className="bg-white p-5 m-5 border-r-2 w-full max-w-screen-lg min-w-[320px] lg:min-w-[1000px]">
      <h1 id="" className="text-gray-600 font-bold mb-12 divide-y divide-gray-200">
        Nuevo Producto
      </h1>

      <form className="max-w-md mx-auto min-w-[100px] lg:min-w-[600px]">

        <div className="grid md:grid-cols-2 md:gap-6">
          
          {/* Input nombre producto */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_nombre"
              id="floating_nombre"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_nombre"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Producto
            </label>
          </div>

          {/* Input categoria */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_categoria"
              id="floating_categoria"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_categoria"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Categoria
            </label>
          </div>

        </div>

        {/* Textarea descripcion producto */}
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="floating_descripcion"
            id="floating_descripcion"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
            placeholder=" "
            rows="3"
            required=""
          ></textarea>
          <label
            htmlFor="floating_descripcion"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
          >
            Descripción
          </label>
        </div>

        {/* Input precio */}

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_precio"
              id="floating_precio"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_precio"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Precio
            </label>
          </div>

          {/* Input cantidad */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_cantidad"
              id="floating_cantidad"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_cantidad"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
            >
              Cantidad
            </label>
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

FormularioNuevoProducto.propTypes = {
  setMostrarForm: PropTypes.func.isRequired
}


