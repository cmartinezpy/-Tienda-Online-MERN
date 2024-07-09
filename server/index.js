require('dotenv').config();
const express = require('express');
const cors = require('cors'); // middleware 
const mongoose = require('mongoose');
const { Usuarios } = require('./models/usuario');

const app = express();

app.use(express.json()); // Configuracion para manejar solicitudes JSON
// Activamos CORS para todas las solicitudes con la configuracion de arriba.
app.use(
    cors(corsOptions)
  );

const PORT = process.env.PORT || '3001'; 
// Crear una configuracion de cors
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }




  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Conexión a la base de datos
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const uri = `mongodb+srv://${process.env.DB_USUARIO}:${process.env.DB_PASSWORD}@${process.env.DB_DOMAIN}/${process.env.DB_NAME}?appName=${process.env.DB_CLUSTER}`;
//const uri = 'mongodb+srv://verasonia3:TFryYZk7C0qJlxJV@cluster0.tdddscl.mongodb.net/tienda-online-mern?retryWrites=true&w=majority&appName=Cluster0';
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose
  .connect(uri)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
  });

//#region Filtrar todos los usuarios
  app.get('/usuario', async(req, res) => {
    try {
      const usuarios = await Usuarios.find({})

      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  })
  //#endregion Filtrar todos los usuarios
//#region Usuario filtrando por ID
app.get('/usuario/:id', async (req, res) => {
  const { id } = req.params;
 try {
  const usuario = await  Usuarios.findById(id);
  if(usuario)
    res.status(200).json(usuario);
  else 
      return res.status(404).json({ message: "Usuario no encontrado" });

 } catch (error) {
  res.status(500).json({ error: error.message });
 }
})
//#endregion
//#region POST para usuarios
app.post( '/usuario', async (req,res) => {

  try {
    const newUser = new Usuarios({
      nombre: req.body.nombre,
      password: req.body.apellido,
      cedula : req.body.cedula,
      password: req.body.password,
      direccion: req.body.direccion,
      fecha_nacimiento: req.body.fecha_nacimiento,
      telefono: req.body.telefono
    });

    await newUser.save();
    res.status(201).json({ message: "Usuario registrado correctamente" })
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
})
//#endregion  POST para usuarios

//#region UPDATE para el Usuario PUT
app.put('/usuario/:id', async (req, res)=> {
      const {id} = req.params;
      const {nombre, apellido, cedula, password, direccion, fecha_nacimiento, telefono} = req.body
      try {

            const updateUsuario = await Usuarios.findByIdAndUpdate(id,
            {nombre,apellido, cedula, password,direccion, fecha_nacimiento,telefono},
            { new: true, runValidators: true }
          )
          if(!updateUsuario)
            return res.status(404).json({ message: "Usuario no encontrado" });

          res.status(200).json(updateUsuario)
        
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
})
//#endregion UPDATE para el Usuario PUT
//#region DELETE Usuuario
app.delete('/usuario/:id', async (req, res)=>{
 const {id} = req.params
  try {
    const eliminarUsuario = await Usuarios.findByIdAndDelete(id);

    if (!eliminarUsuario) {
      return res.status(404).send('User not found');
    }

    res.send(eliminarUsuario);
  } catch (error) {
    res.status(400).send(error);
  }
})
//#endregion DELETE Usuuario

// Hacemos que nuestra aplicación escuche el puerto que configuramos
// con el metodo listen(puerto, callback)
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

  


