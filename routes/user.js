import express from 'express';

/* controllers */
import { getUser, createUser, updateUser, deleteUser, getUserPosts } from '../controllers/users.js';
import { addComment, updateComment, deleteComment } from '../controllers/comments.js';
import { getUserPins, deteleUserPin } from '../controllers/ediblePins.js';

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
users.get('/:id/text', getUserPosts);

/* comments */
users.post('/:id/text', addComment);
users.put('/:id/text/:text', updateComment);  //the :id is not used here 
users.delete('/:id/text/:text', deleteComment);

/* pins  */
users.get('/:id/pins', getUserPins)
users.delete('/:id/pins/:pin', deteleUserPin)
export default users;