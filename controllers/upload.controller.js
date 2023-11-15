const uploadImagen = (req,res) => {
    const file = req.file

    if (!file) {
        return res.status(400).send('No se recibio la imagen')
    }else{
        res.status(201).json({foto: file.filename})
    }


}

export default {uploadImagen}