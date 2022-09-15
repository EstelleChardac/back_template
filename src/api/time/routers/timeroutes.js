import { Router } from 'express';
import timeController from '../controllers/time.js';
// import { Express } from 'express';

const router = Router();

// get all elements from time
router.get('/', timeController.getTime);

export default router;
