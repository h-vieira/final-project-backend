import express from 'express';

/* controllers */
import {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} from '../controller/users.js';

/* middlewares */
import checkUser from '../middleware/checkUser.js';

const users = express.Router();

/* 
    @route  GET / 
    @desc   Get all users
    @access Public
*/
users.get('/', getAllUsers);
users.get('/user/:id', checkUser, getUser);
users.post('/', createUser);
users.put('/user/:id', checkUser, updateUser);
users.delete('/user/:id', checkUser, deleteUser);

export default users;