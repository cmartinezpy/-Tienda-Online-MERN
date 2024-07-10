const mongoose = require('mongoose');

// Esquema de Categoria
const categoriaSchema = new mongoose.Schema({
    nombre: { type: String }
}, { collection: 'categorias' }); // nombre de la colección en la base de datos (opcional)
  
const Categoria = mongoose.model("Categoria", categoriaSchema);


// Esquema de Producto
const ProductoSchema = new mongoose.Schema({

    nombre: { type: String, required: true }, // Requerido
    descripcion: { type: String, required: true }, // Requerido
    precio: { type: Number, required: true }, // Requerido
    imagen: { type: String }, // No es requerido
    fecha_ingreso: { type: Date }, // No Requerido
    cantidad: { type: Number, required: true }, // Requerido
    categoria: { type: String }, // No es requerido
    // categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria", required: true }, // Hace referencia al schema Categoria
    activo: { type: Boolean, default: true } // dato por defecto es true

}, { collection: 'productos' });

const Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Producto;