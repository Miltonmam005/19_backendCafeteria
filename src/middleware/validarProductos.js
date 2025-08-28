import { body } from "express-validator";
import resultadoValidado from "./resultadoValidado.js";

const validarProductos = [
  body('nombreProducto').notEmpty().withMessage('El nombre del producto es obligatorio').isString().withMessage('El nombre del producto debe ser una cadena de texto'),
  body('precio').notEmpty(),
  ( req, res, next)=> resultadoValidado(req, res, next)
]

export default validarProductos;