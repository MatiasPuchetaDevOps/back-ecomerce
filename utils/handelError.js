
const handleError = (res, mensaje = "Algo sucedio", codigo = 500, error) => {
    console.log(mensaje,error)
    return res.status(codigo).json({ok:false , error:mensaje})
}

export default handleError