import express from 'express';
import morgan from 'morgan';                /* terminal logs */
import db from './config/elephantSQL.js';   /* db pool */


/* Routes *****************************************************/
/* import users  from './routes/user.js'; */

/* Models *****************************************************/
import UsersModel from './models/users.js';
import EdiblesModel from './models/edibles.js';
import CommentsModel from './models/comments.js';
import SimilarsModel from './models/similars.js';
import UserAuthsModel from './models/userAuth.js';
import AuthOptionsModel from './models/authOptions.js';

/* Controlers *************************************************/
import UserController from './models/users.js';





const server = express();
const PORT = process.env.PORT || 5000;
/* console.log('hello', process.env.PORT) */
if (process.env.NODE_ENV != 'production') {
    server.use(morgan('dev'));
}

server.get('/', async (req, res) => res.send("Connection sucessfull!"));

/* Useable routes *********************************************/







  (async () => {
    try {
        await db.authenticate();

        /* sync the tables to database | ( if(!exist) => create() ) */
        await UsersModel.sync();
        await EdiblesModel.sync();
        await CommentsModel.sync();
        await SimilarsModel.sync();
        await UserAuthsModel.sync();
        await AuthOptionsModel.sync();


        server.listen( PORT, console.log(`Server started on port ${PORT}`));
        console.log('Connection: success');


    } catch (err) {
        console.error('Unable to connect' + err);
    }
  })();
 
  