import ModeloProducto from "../modelos/modeloProducto.js";

const controladorProductos = {
  crearProducto: async (solicitud, respuesta) => {
    try {
      if (solicitud.body.titulo === "") throw new Error("falta crear producto");
      if (solicitud.body.precio === "") throw new Error("falta crear producto");
      if (solicitud.body.categoria === "")
        throw new Error("falta crear producto");
      if (solicitud.body.descripcion === "")
        throw new Error("falta crear producto");
      if (solicitud.body.imagen === "") throw new Error("falta crear producto");
      if (solicitud.body.marca === "") throw new Error("falta crear producto");
      if (solicitud.body.color === "") throw new Error("falta crear producto");
      if (solicitud.body.material === "")
        throw new Error("falta crear producto");

      //logica para crear el producto en la base de datos
      const nuevoProducto = new ModeloProducto(solicitud.body);
      const productoCreado = await nuevoProducto.save();
      if (productoCreado._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "producto creado",
          datos: productoCreado._id,
        });
      }
    } catch (error) {
      console.log("error: ", error);
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al crear producto",
        datos: error,
      });
    }
  },
  obtenerProducto: async (solicitud, respuesta) => {
    try {
      const productoEncontrado = await ModeloProducto.findById(
        solicitud.params.id
      );
      if (productoEncontrado._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "producto obtenido",
          datos: productoEncontrado._id,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al obtener producto",
        datos: error,
      });
    }
  },
  obtenerProductos: async (solicitud, respuesta) => {
    try {
      const todosLosProductos = await ModeloProducto.find();
      respuesta.json({
        resultado: "bien",
        mensaje: "productos obtenidos",
        datos: todosLosProductos,
      });
    } catch (error) {
      respuesta.json({
        ressultado: "mal",
        mensaje: "ocurrió un error al obtener todos los productos",
        datos: error,
      });
    }
  },
  actualizarProducto: async (solicitud, respuesta) => {
    try {
      console.log("id:", solicitud.params.id);
      console.log("solicitud body", solicitud.body);
      const productoActualizado = await ModeloProducto.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      if (productoActualizado._id) {
        respuesta.json({
          resultado: "bien",
          mensaje: "producto actualizado",
          datos: productoActualizado._id,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al actualizar producto",
        datos: error,
      });
    }
  },

  eliminarProducto: async (solicitud, respuesta) => {
    try {
      const productoEliminado = await ModeloProducto.findByIdAndDelete(
        solicitud.params.id
      );
      if (productoEliminado._id)
        respuesta.json({
          resultado: "bien",
          mensaje: "producto eliminado",
          datos: null,
        });
    } catch (error) {
      respuesta.json({
        resultado: "mal",
        mensaje: "ocurrió un error al eliminar",
        datos: error,
      });
    }
  },
};

export default controladorProductos;
