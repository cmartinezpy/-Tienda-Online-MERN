

import PropTypes from 'prop-types'
import { ProductoCard } from './ProductoCard'

export const ListCardProductos = ({ producto }) => {


  return (
    <>
      <ProductoCard producto={producto} />
    </>
  );
  
}

ListCardProductos.propTypes = {
  producto: PropTypes.object.isRequired
}
