import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import '../db/config.js' 

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
  }

  // AGREGAR METODOS
  // middlewares
  middlewares() {
    this.app.use(cors()); //permite tener conecciones remotas
    this.app.use(express.json()); //interpreta los datos JSON que llega en la solicitud
    this.app.use(morgan("dev")); //muestra en consola las peticiones que llegan al servidor
    const __dirname = dirname(fileURLToPath(import.meta.url));
    this.app.use(express.static(`${__dirname}/../public`)); //sirve archivos estáticos desde la carpeta public);
    console.log(`${__dirname}/../public`);
  }

  // escuchar el puerto
  listen() {
    this.app.listen(this.port, () => {
      console.info(
        `el servidor se esta ejecutando en: http://localhost:${this.port}`
      );
    });
  }
}
