import { Router } from "express";
import {
  crearProducto,
  leerProductos,
  test,
  leerProductosID,
} from "../controllers/productos.controllers.js";
import { get } from "http";

const router = Router();
// get, post , put, delete
router.route("/test").get(test);
router.route("/").get(leerProductos).post(crearProducto);
router.route("/:id").get(leerProductosID);

export default router;
