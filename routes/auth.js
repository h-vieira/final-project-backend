import express from 'express';

/* controllers */
import { signUp, signIn, logout} from '../controllers/auth.js';

/* middlewares */


const auth = express.Router();

auth.post('/signUp', signUp);
auth.post('/signIn', signIn);
auth.post('/logout', logout);

export default auth;