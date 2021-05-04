import express from 'express';

/* controllers */
import {getUser, createUser, updateUser, deleteUser} from '../controllers/users.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */

const users = express.Router();

/* 
    @route  GET / 
    @desc   Get all users
    @access Public
*/
users.get('/', getUser);
users.post('/', createUser);
users.put('/user/:id', updateUser);
users.delete('/user/:id', deleteUser);
 
export default users;