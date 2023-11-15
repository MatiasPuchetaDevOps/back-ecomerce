import mongoose from "mongoose";
import handleMongoId from "../utils/handelMongoId.js";

//! Crear el esquema

const productosSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock:Number,
    marca:String,
    categoria:String,
    detalles:String,
    foto:String,
    envio: Boolean
},
{
    versionKey:false,
    timestamps: true // 2 files => cuando se creo y cuando se modifico
})

//! Creamos el modelo
const ProductoModel = mongoose.model('productos', productosSchema)

//! CRUD para interactuar con la DB

const leerProductos = async () => {
    try {
        const productos = await ProductoModel.find({})
        return handleMongoId(productos)
    } catch (error) {
        console.log(`Leer productos: Algo salio mal`, error)
    }
}
const leerUnProducto = async (id) => {
    try {
        const producto = await ProductoModel.findById(id)
        return handleMongoId(producto)
    } catch (error) {
        console.log(`[Leer producto]: Algo salio mal`, error)
    }
}
const guardarProducto = async (productoNuevo) => {
    try {
        const productoCreado = new ProductoModel(productoNuevo)
        await productoCreado.save()
        return handleMongoId(productoCreado)
    } catch (error) {
        console.log(`[Guardar producto]: Algo salio mal`, error)
    }
}
const modificarProducto = async (id, productoAEditar) => {
    try {
        const productoModificado = await ProductoModel.findByIdAndUpdate(id, productoAEditar,{new:true})
        return handleMongoId(productoModificado)
    } catch (error) {
        console.log(`[Guardar producto]: Algo salio mal`, error)
    }
}
const eliminarProducto = async (id) => {
    try {
        const productoBorrado = await ProductoModel.findByIdAndDelete(id)
        return handleMongoId(productoBorrado)
    } catch (error) {
        console.log(`[Eliminar producto]: Algo salio mal en la db`, error)
    }
}



export default {
    leerProductos,
    leerUnProducto,
    guardarProducto,
    modificarProducto,
    eliminarProducto
}