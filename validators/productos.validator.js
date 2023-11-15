import { check } from "express-validator"
import productoMiddleawre from "../middleware/productos.middleware.js"

const productoDeleteValidator = [
    // array de middleware
    check('id')
        .isMongoId()
        .withMessage('Envio Informacion incorrecta para el borrado del producto'),
    productoMiddleawre
]

const productoCreateValidator = [
    check('nombre')
        .notEmpty()
        .trim()
        .isString()
        .withMessage('El nombre es requerido'),
    check('categoria')
        .notEmpty()
        .trim()
        .isString()
        .withMessage('La categoria es requerida'),
    productoMiddleawre
]

export default {
    productoDeleteValidator,
    productoCreateValidator
}