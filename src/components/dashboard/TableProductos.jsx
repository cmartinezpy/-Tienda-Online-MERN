

export const TableProductos = () => {

  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripcion del producto 1',
      cantidad: '20',
      precio: '1000'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripcion del producto 2',
      cantidad: '30',
      precio: '2000'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripcion del producto 3',
      cantidad: '40',
      precio: '3000'
    }
  ]

  return (
    <div className="flex flex-col w-full">

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

            <div className="flex justify-end items-center mb-4 m-3">
              <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-700">Nuevo Producto</button>
            </div>

            <table className="min-w-full divide-y divide-gray-200 pl-5 pr-5">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Producto
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Descripcion
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Precio
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productos.map(product => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img className="h-12 w-12 rounded-full" src={product.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-lg font-medium text-gray-900">{product.nombre}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-lg text-gray-900">{product.descripcion}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-sm leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        {product.cantidad}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">
                      {product.precio}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
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

