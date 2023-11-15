import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "node:path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const retuDeAlmacenamiento = path.join("public", "uploads");
    cb(null, retuDeAlmacenamiento);
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split(".").pop();
    const nombreArchivo = `${uuidv4()}.${extension}`;
    cb(null, nombreArchivo);
  },
});

//Creao el Middleware

const uploadMiddleware = multer({ storage });

export default uploadMiddleware
