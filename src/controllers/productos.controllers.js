import producto from "../models/producto";

export const test =(req, res) =>{
  res.status(200);
  res.send('primera Prueba desde el backend')
}

export const leerProductos=( req, res) =>{

} 

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

// funcion para editar productos 

// funcion para borrar productos.

