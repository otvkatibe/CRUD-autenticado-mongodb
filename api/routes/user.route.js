import express from 'express';
import { registerUser,
    loginUser,
    getUserProfile,
} from '../controller/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getUserProfile);

export default router;
