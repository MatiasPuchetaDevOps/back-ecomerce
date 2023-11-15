import mongoose from "mongoose";
export const conectarMongo = async () => {
  try {
    await mongoose.connect(process.env.URI_LOCAL);
    console.log("Conexion a Mongo con exito");
  } catch (error) {
    console.log("Error al conectar con Mongo");
  }
};
