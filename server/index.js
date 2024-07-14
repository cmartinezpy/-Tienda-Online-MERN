require('dotenv').config();
const express = require('express');
const cors = require('cors'); // middleware 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Para encriptar contraseñas

// Importamos los modelos de la base de datos
const Producto = require('./models/Producto');
const { Usuarios } = require('./models/usuario');

// JSON WEB TOKEN
const jwt = require('jsonwebtoken');
const jwtConfig = require('./jwt.config.js');

// Configuramos el servidor de express
const app = express();


app.use(express.json()); // Configuracion para manejar solicitudes JSON

app.set('key', jwtConfig.clave); // Configuramos la clave secreta para JWT

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

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose
  .connect(uri)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
  });



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + AUTENTICACIÓN
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Ruta para autenticar al usuario y hacer login
app.post("/login", async (req, res) => {

  try {

    // Chequeamos si el email existe
    const user = await Usuarios.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(401)
        .json({ error: "El email no existe en nuestra base de datos" });
    }

    // Comparar las contraseñas
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "La contraseña no es correcta" });
    }

    // Generate JWT token
    const secret = app.get("key");
    const token = jwt.sign({ email: user.email , rol: user.rol }, secret);

    res.status(200).json({ token, ok: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
  
});

// Ruta para registrar al usuario // Desde el cliente
app.post("/registro", async (req, res) => {

  try {

    // Chequeamos si el email existe
    const user = await Usuarios.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(401)
        .json({ error: "El email ya existe" });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Creamos el objeto usuario desde el modelo Usuario
    const newUser = new Usuarios({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      password: hashedPassword,
      rol: "cliente"
    });

    await newUser.save();
    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
  
});




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + USUARIOS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//#region Filtrar todos los usuarios
app.get('/usuario', async (req, res) => {
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

//#region POST para usuarios // Desde admin
app.post( '/usuario', async (req,res) => {

  try {

    // Chequeamos si el email existe
    const user = await Usuarios.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(401)
        .json({ error: "El email ya existe" });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const NuevoUsuario = new Usuarios({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cedula : req.body.cedula,
      password: hashedPassword,
      email: req.body.email,
      direccion: req.body.direccion,
      fecha_nacimiento: req.body.fecha_nacimiento,
      telefono: req.body.telefono,
      rol: req.body.rol,
      activo: req.body.activo
    });

    if(NuevoUsuario)

      await NuevoUsuario.save();
      res.status(201).json({ message: "Usuario registrado correctamente" })

  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
})
//#endregion  POST para usuarios

//#region UPDATE para el Usuario PUT
app.put('/usuario/:id', async (req, res)=> {
      const {id} = req.params;
      const {nombre, apellido, cedula, password,email,direccion,fecha_nacimiento, telefono, activo} = req.body
      try {

            const updateUsuario = await Usuarios.findByIdAndUpdate(id,
            {nombre,apellido,cedula,password,email,direccion, fecha_nacimiento,telefono,activo},
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
      return res.status(404).send('No existe el usuario');
    }

    res.send(eliminarUsuario);
  } catch (error) {
    res.status(400).send(error);
  }
})
//#endregion DELETE Usuuario



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + PRODUCTOS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Endpoint para obtener todos los productos y mostrarlos en la página principal
  app.get("/productos", async (req, res) => {
    try {
      const productos = await Producto.find({});
      if ( !productos || productos.length === 0 ) {
        return res.status(201).json({ error: "No existen productos cargados" });
      }
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Endpoint para obtener un producto por su ID y mostrarlo en la página de detalle
  app.get("/producto/:id", async (req, res) => {

    try {
      const producto = await Producto.findById(req.params.id);
      if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }

  });

  // Endpoint para obtener todos los productos - Ruta protegida
  app.get("/dashboard/productos", async (req, res) => {
    try {
      const productos = await Producto.find({});
      if ( !productos || productos.length === 0 ) {
        return res.status(404).json({ error: "No existen productos cargados" });
      }
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Endpoint para crear un producto - Ruta protegida
  app.post("/dashboard/producto", async (req, res) => {

    try {
      const producto = new Producto(req.body);
      await producto.save();
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }

  });

  // Endpoint para actualizar un producto - Ruta protegida
  app.put("/dashboard/producto/:id", async (req, res) => {

    try {
      const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }

  });

  // Endpoint para eliminar un producto - Ruta protegida
  app.delete("/dashboard/producto/:id", async (req, res) => {

    try {
      const producto = await Producto.findByIdAndDelete(req.params.id);
      if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }

  });


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Hacemos que nuestra app escuche el puerto configurado
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

