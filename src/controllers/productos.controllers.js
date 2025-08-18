import Producto from "../models/producto.js";

export const test =(req, res) =>{
  res.status(200);
  res.send('primera Prueba desde el backend')
}

export const leerProductos= async ( req, res) =>{
try{
  // devuelve todos los documentos de base de datos
 const listaProductos = await Producto.find();
// envia la respuesta al front 
 res.status(200).jason(listaProductos)
}catch(error){
  console.error(error);
  res.status(500).json({ mensaje : 'Error al leer los productos'})
}
} 

// Crear un nuevo producto
export const crearProducto = async (req, res) => {
  try {
    // 
    const nuevoProducto = new Producto(req.body);
    // 
    await nuevoProducto.save();
    // envia la repuesta al front
    res.status(201).json({mensaje: 'El producto fue creado existosamente'});
  } catch (error) {
    res.status(400).json({mensaje: 'Error al crear el producto'});
  }
};

// funcion para editar productos 

// funcion para borrar productos.

