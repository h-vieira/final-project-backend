import express from 'express';         

/* controllers */
import { getAllEdibles, getsingeEdible, createEdible, updateEdible, deleteEdible } from '../controllers/edibles.js';
import { pinEdible, getEdiblePins} from '../controllers/ediblePins.js';

/* middlewares */
/* import checkUser from '../middleware/checkUser.js'; */


const ediblesRouter = express.Router();

/* 
    @route  GET / 
    @desc   Get all Edibles
    @access Public
*/
ediblesRouter.get('/all/:page/', getAllEdibles); //edibles.get('/all/:page/:limit/', getAllEdibles); set and limit of x elements per page <user choice>
ediblesRouter.get('/:id', getsingeEdible);
ediblesRouter.post('/', createEdible);
ediblesRouter.put('/:id', updateEdible);
ediblesRouter.delete('/:id', deleteEdible);

/* Map Pins */
ediblesRouter.get('/:id/pin', getEdiblePins)
ediblesRouter.post('/:id/pin', pinEdible);

export default ediblesRouter;