import express from "express";
import controller from "../controllers/productos.controller.js";
import validator from '../validators/productos.validator.js'


const routerProductos = express.Router(); //importo las rutas de express

// ! GET ALL / GET ONE
routerProductos.get("/:id?", controller.obtenerProducto);

//! POST CREATE
routerProductos.post("/", validator.productoCreateValidator ,controller.crearProducto);

//!PUT UPDATE
routerProductos.put("/:id", controller.editarProducto);

//! DELETE
routerProductos.delete("/:id",validator.productoDeleteValidator, controller.borrarProducto);


export default routerProductos;
