//importando router para crear un enrutador
import { Router } from "express";
import controladorProductos from "../controladores/controladorProductos.js";

//creando enrutador
const enrutadorProductos = Router();

enrutadorProductos.post("/", controladorProductos.crearProducto);
enrutadorProductos.get("/", controladorProductos.obtenerProducto);
enrutadorProductos.get("/:id",controladorProductos.obtenerProductos );
enrutadorProductos.put("/:id", controladorProductos.actualizarProducto );
enrutadorProductos.delete("/:id", controladorProductos.eliminarProducto);


export default enrutadorProductos;
