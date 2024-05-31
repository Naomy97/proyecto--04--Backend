import { Schema, model } from "mongoose";

const esquemaProducto = new Schema(
    {
  titulo: { type: String, required: true},
  precio: { type: Number, required: true},
  talla: { type: String, required: true},
  categoria: { type: String, required: true},
  descripcion: { type: String, required: true},
  imagen:[{ type: String}],  //para multiples imagenes 
  marca: { type: String },
  color: { type: String, required: true},
  material: { type: String},
  destacado: { type: Boolean, default: true }, //para indicar si el producto es destacado
});

export default model("producto",esquemaProducto);

