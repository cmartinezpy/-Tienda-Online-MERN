const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    cedula: Number,
    password: String,
    email: String,
    direccion: String,
    fecha_nacimiento: Date,
    telefono: Number,
    activo : Boolean,
}, { collection: 'usuarios' })


const Usuarios = mongoose.model('usuarios', usuarioSchema);

module.exports = { Usuarios };
