import express from 'express';

/* controllers */
import localEdibles from '../controllers/local.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */

const local = express.Router();

/* 
    @route  GET / 
    @desc   Get edibles by location
    @access Public
*/
local.get('/:stateName', localEdibles);       

 
export default local;