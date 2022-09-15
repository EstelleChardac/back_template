import { Router } from 'express';
import setUpRoutes from './time/routers/timeroutes.js';

const router = Router();

router.use('/time', setUpRoutes);

export default router;
