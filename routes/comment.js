import express from 'express';

/* controllers */
import {getComment, addComment, updateComment, deleteComment} from '../controllers/comments.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */

const comments = express.Router();

/* 
    @route  GET / 
    @desc   Get all comments
    @access Public
*/
comments.get('/', getComment);
comments.post('/', addComment);
comments.put('/comment/:id', updateComment);
comments.delete('/comment/:id', deleteComment);
 
export default comments;