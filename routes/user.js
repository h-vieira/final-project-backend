import express from 'express';

/* controllers */
import { getUser, /* createUser, */ updateUser, deleteUser, getUserComments } from '../controllers/users.js';
import { addComment, updateComment, deleteComment } from '../controllers/comments.js';
import { getUserPins, deteleUserPin } from '../controllers/ediblePins.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */

const usersRouter = express.Router();

/* 
    @route  GET / 
    @desc   Get all users
    @access Public
*/
usersRouter.get('/:id', getUser);
/* users.post('/', createUser); */
usersRouter.put('/:id', updateUser);
usersRouter.delete('/:id', deleteUser);
usersRouter.get('/:id/text', getUserComments);

/* comments */
usersRouter.post('/:id/text', addComment);
usersRouter.put('/:id/text/:text', updateComment);  //the :id is not used here 
usersRouter.delete('/:id/text/:text', deleteComment);

/* pins  */
usersRouter.get('/:id/pins', getUserPins);
usersRouter.delete('/:id/pins/:pin', deteleUserPin);

export default usersRouter;