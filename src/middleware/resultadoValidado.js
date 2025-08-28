import { validationResult } from "express-validator";

const resultadoValidado = (req, res, next) => {
  const errores = validationResult(req);
//   errores.isEmpty() = true si no hay errores,= false si hay errores de validacion
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
//   sigue el siguente paso de la logica
  next();
}

export default resultadoValidado;