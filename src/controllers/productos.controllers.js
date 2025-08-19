import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send("primera Prueba desde el backend");
};

export const leerProductos = async (req, res) => {
  try {
    // devuelve todos los documentos de base de datos
    const listaProductos = await Producto.find();
    // envia la respuesta al front
    res.status(200).jason(listaProductos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los productos" });
  }
};

export const leerProductosID = async (req, res) => {
  try {
    // obtener el partametro deñ request.
   
    // pedir a moongose que encuentre el producto con tal ID.
    const productoBuscado = await Producto.findById(req.params.id);
    if(!productoBuscado){
      return res.status(404).json({ mensaje: 'Producto No encontrado'})
     }
    // contestar el from.
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los productos" });
  }
};

// Crear un nuevo producto
export const crearProducto = async (req, res) => {
  try {
    //
    const nuevoProducto = new Producto(req.body);
    //
    await nuevoProducto.save();
    // envia la repuesta al front
    res.status(201).json({ mensaje: "El producto fue creado existosamente" });
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el producto" });
  }
};

// funcion para editar productos

// funcion para borrar productos.
