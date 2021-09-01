import express from 'express';
import controller from '../controllers/machines';

const router = express.Router();

router.post('/machines', controller.addMachine);
router.get('/machines', controller.getMachines);

export default router;