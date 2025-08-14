import producto from "../models/producto";


// Crear un nuevo producto
export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new producto(req.body);
    await nuevoProducto.save();
    res.status(201).json({mensaje: 'El producto fue creado existosamente'});
  } catch (error) {
    res.status(400).json({mensaje: 'Error al crear el producto'});
  }
};
