
const handleMongoId = (elemento)=>{
    const pk = '_id'

    elemento = JSON.parse(JSON.stringify(elemento))
    if (Array.isArray(elemento)) {
        for (let i = 0; i < elemento.length; i++) {
            elemento[i].id= elemento[i][pk]
        delete elemento[i][pk]
            
        }
    } else {
        elemento.id= elemento[pk]
        delete elemento[pk]
    }
    return elemento
}

export default handleMongoId