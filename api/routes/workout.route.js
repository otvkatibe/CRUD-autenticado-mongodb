import express from 'express';
import {
    createWorkout,
    getWorkout,
    getWorkoutById,
    updateWorkout,
    patchWorkout,
    deleteWorkout
} from '../controller/workout.controller.js';
import verifyToken from '../middlewares/jwt.token.middleware.js';
import { validateObjectId } from '../middlewares/objeto.middleware.js';

const router = express.Router();

router.use(verifyToken);

router.post('/', createWorkout);
router.get('/', getWorkout);
router.get('/:id', validateObjectId, getWorkoutById);
router.put('/:id', validateObjectId, updateWorkout);
router.patch('/:id', validateObjectId, patchWorkout);
router.delete('/:id', validateObjectId, deleteWorkout);

export default router;