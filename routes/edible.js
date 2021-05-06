import express from 'express';         

/* controllers */
import { getAllEdibles, getsingeEdible, createEdible, updateEdible, deleteEdible } from '../controllers/edibles.js';
import { pinEdible } from '../controllers/ediblePins.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */


const edibles = express.Router();

/* 
    @route  GET / 
    @desc   Get all Edibles
    @access Public
*/
edibles.get('/all/:page/', getAllEdibles); //edibles.get('/all/:page/:limit/', getAllEdibles); set and limit of x elements per page <user choice>
edibles.get('/:id', getsingeEdible);
edibles.post('/', createEdible);
edibles.put('/:id', updateEdible);
edibles.delete('/:id', deleteEdible);

/* Map Pins */
edibles.post('/:id/pin', pinEdible);

export default edibles;