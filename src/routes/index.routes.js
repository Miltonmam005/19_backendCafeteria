import productoRouter from "./productos.routes.js";
import { Router } from 'express';

const router = Router();

router.use('/productos', productoRouter);

export default router; 