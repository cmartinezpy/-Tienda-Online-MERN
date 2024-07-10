require('dotenv').config();
const express = require('express');
const cors = require('cors'); // middleware 
const mongoose = require('mongoose');

const Producto = require('./models/Producto');

const app = express();

const PORT = process.env.PORT || '3001'; 

app.use(express.json()); // Configuracion para manejar solicitudes JSON
// Activamos CORS para todas las solicitudes con la configuracion de arriba.
app.use(
    cors(corsOptions)
  );

// Crear una configuracion de cors
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Conexión a la base de datos
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const uri = `mongodb+srv://${process.env.DB_USUARIO}:${process.env.DB_PASSWORD}@${process.env.DB_DOMAIN}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`;

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

