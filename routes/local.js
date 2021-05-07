import express from 'express';

/* controllers */
import localEdibles from '../controllers/local.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */

const localRouter = express.Router();

/* 
    @route  GET / 
    @desc   Get edibles by location
    @access Public
*/
localRouter.get('/:stateName', localEdibles);       

 
export default localRouter;