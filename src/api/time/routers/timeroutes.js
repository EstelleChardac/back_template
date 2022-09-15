import { Router } from 'express';
import timesController from '../controllers/times.js';

const router = Router();

// get all elements from time
router.get('/', timesController.getTime);

export default router;
