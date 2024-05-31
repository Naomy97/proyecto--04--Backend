//importando el servidor de express
import "dotenv/config";
import "./conexionBD.js";
import servidor from "./servidor.js";


// enciendo el servidor y pongo a escuchar peticiones por el puerto 3000
servidor.listen(3000, ()=>{
    console.log("servidor corriendo en el puerto 3000");
});



