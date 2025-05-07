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

const router = express.Router();

router.use(verifyToken);

router.post('/', createWorkout);
router.get('/', getWorkout);
router.get('/:id', getWorkoutById);
router.put('/:id', updateWorkout);
router.patch('/:id', patchWorkout);
router.delete('/:id', deleteWorkout);

export default router;