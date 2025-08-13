import { Router } from 'express';

const router = Router();

router.use('/test', (req, res) =>{
  res.status(200);
  res.send('primera Prueba desde el backend')
});

export default router; 