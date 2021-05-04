import express from 'express';         
 /* get eddible info */

/* controllers */
import { getAllEdibles, getsingeEdible, createEdible, updateEdible, deleteEdible } from '../controllers/edibles.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */

const edible = express.Router();

/* 
    @route  GET / 
    @desc   Get all Edibles
    @access Public
*/
edible.get('/', getAllEdibles);
edible.get('/:id', getsingeEdible);
edible.post('/', createEdible);
edible.put('/:id', updateEdible);
edible.delete('/:id', deleteEdible);
 
export default edible;