import models from "../models/productos.model.js";
import handleError from "../utils/handelError.js";

const obtenerProducto = async (req, res) => {
  let id = req.params.id;

  try {
    if (id) {
      const producto = await models.leerUnProducto(id);
      res.status(200).json(producto);
    } else {
      const productos = await models.leerProductos();
      res.status(200).json(productos);
    }
  } catch (error) {
    let mensaje = '[obtener productos]: Algo salio mal'
    handleError (res, mensaje, error)
  }
};
const crearProducto = async (req, res) => {
  const producto = req.body;

  try {
    const productoGuardado = await models.guardarProducto(producto);
    res.status(201).json(productoGuardado);
  } catch (error) {
    let mensaje = '[Guardar producto]: Algo salio mal'
    handleError (res, mensaje, error)
  }
};
const editarProducto = async (req, res) => {
  const id = req.params.id;
  const producto = req.body;
  try {
    const productoActualizado = await models.modificarProducto(id, producto);
    res.status(200).json(productoActualizado);
  } catch (error) {
    let mensaje = '[Actualizar producto]: Algo salio mal'
    handleError (res, mensaje, error)
  }
};
const borrarProducto = async (req, res) => {
  const id = req.params.id;
  try {
    const productoEliminado = await models.eliminarProducto(id);
    res.status(200).json(productoEliminado);
  } catch (error) {
    let mensaje = '[Eliminar producto]: Algo salio mal'
    handleError (res, mensaje, error)
  }
};

export default {
  obtenerProducto,
  crearProducto,
  editarProducto,
  borrarProducto,
};
