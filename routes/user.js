import express from 'express';

/* controllers */
import {getUser, createUser, updateUser, deleteUser, getUserPosts} from '../controllers/users.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */

const users = express.Router();

/* 
    @route  GET / 
    @desc   Get all users
    @access Public
*/
users.get('/:id', getUser);
users.post('/', createUser);
users.put('/:id', updateUser);
users.delete('/:id', deleteUser);

users.get('/:id/posts', getUserPosts);
 
export default users;