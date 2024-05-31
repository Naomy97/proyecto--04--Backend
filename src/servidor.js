import express from "express";
import morgan from "morgan";
import enrutadorProductos from "./rutas/rutaProductos.js";

const servidor = express();

servidor.use(express.json());
servidor.use(morgan("dev"));
servidor .use("/productos", enrutadorProductos);


//ruta raiz
servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("Oops! We can't find the page you're looking for.");
  });


//exportando el archivo 
export default servidor; 