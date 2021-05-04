import express from 'express';

/* controllers */
import localEdibles from '../controllers/local.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */

const local = express.Router();

/* 
    @route  GET / 
    @desc   Get all users
    @access Public
*/
local.get('/:location', localEdibles);

 
export default local;