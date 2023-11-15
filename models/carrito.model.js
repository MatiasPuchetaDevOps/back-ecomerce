import mongoose from "mongoose";

//! Crear el esquema

const carritoSchema = mongoose.Schema({
  carrito: Array,
});

//! Creamos el modelo
const CarritooModel = mongoose.model("carritos", carritoSchema);

//! mEDOTOS

const crearCarrito = async (carrito) => {
  try {
    const carritoCreado = new CarritooModel({ carrito });
    const carritoGuardado = await carritoCreado.save()
    return carritoGuardado
  } catch (error) {
    console.log('Error: No se pudo armar el carrito')
  }
};

export default {crearCarrito}