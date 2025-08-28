import { Router } from "express";
import { borrarProductoPorId, crearProducto, editarProductoPorId, leerProductoPorId, leerProductos, test } from "../controllers/productos.controllers.js";
import validarProductos from "../middleware/validarProductos.js";

const router = Router();
// get, post, put, delete solicitud, request
router.route('/test').get(test)
router.route('/').get(leerProductos).post(validarProductos,crearProducto)
router.route('/:id').get(leerProductoPorId).delete(borrarProductoPorId).put(validarProductos,editarProductoPorId)

export default router;