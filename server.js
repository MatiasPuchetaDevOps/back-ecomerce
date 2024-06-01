import express from "express";
import "dotenv/config";
import routerProductos from "./routers/productos.router.js";
import cors from "cors";

import { conectarMongo } from "./config/conectarMongo.js";
import routerUpload from "./routers/upload.router.js";
import routerCarrito from "./routers/carrito.route.js";

//! Config
const PORT = process.env.PORT;
const app = express();
const corsConfig = {
  origin: process.env.URL_FRONT_CORS,
};

//! Coneccion a Mongo
conectarMongo();

console.log(process.env.URL_FRONT_CORS)
//! Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); // para poder ver las imagenes
app.use(cors(corsConfig));

//! Routes----------------------------------------
app.use("/api/productos", routerProductos); // Aunque sea un middleware lo ponemos aca
app.use("/api/upload", routerUpload); // Aunque sea un middleware lo ponemos aca
app.use("/api/carrito", routerCarrito); // Aunque sea un middleware lo ponemos aca

app.all("*", (req, res) => {
  res.status(404).send(`La ruta ${req.url} con el metodo ${req.method} no esta disponible`);
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
});
