import express from 'express';

/* controllers */
import { signUp, signIn, logout, getMyInfo } from '../controllers/auth.js';

/* middlewares */
import verifyToken from '../middleware/verifyToken.js';

const authRouter = express.Router();

authRouter.get('/me', verifyToken, getMyInfo);
authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
authRouter.post('/logout', logout);

export default authRouter;