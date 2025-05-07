import express from 'express';
import verifyToken from '../middlewares/jwt.token.middleware.js';
import secureController from '../controller/secure.controller.js';
import { registerUser,
    loginUser,
    getUserProfile,
} from '../controller/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getUserProfile);
router.get('/secure', verifyToken, secureController.Endpoint);

export default router;
