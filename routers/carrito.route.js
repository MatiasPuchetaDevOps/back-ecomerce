import express from 'express'
import controller from '../controllers/carrito.controller.js'

const routerCarrito = express.Router()

routerCarrito.post('/', controller.guardarCarrito)

export default routerCarrito