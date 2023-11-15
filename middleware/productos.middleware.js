import { validationResult } from "express-validator";

const productoMiddleaware = (req,res,next) => {
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({errorres: errores.array()})
    }
    next()
}

export default productoMiddleaware