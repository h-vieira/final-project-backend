import express from 'express';
import morgan from 'morgan';                /* terminal logs */
import colors from 'colors';                /* more colorfull console.logs */
import db from './config/elephantSQL.js';   /* db pool */


/* Routes *****************************************************/
import users  from './routes/user.js';
import comments  from './routes/comment.js';
import local  from './routes/local.js';
import edible  from './routes/edible.js';

/* Models *****************************************************/
import UsersModel from './models/users.js';
import EdiblesModel from './models/edibles.js';
import CommentsModel from './models/comments.js';
import SimilarsModel from './models/similars.js';
import UserAuthsModel from './models/userAuth.js';
import AuthOptionsModel from './models/authOptions.js';
import EdiblePinsModel from './models/ediblePins.js';

/* Controlers *************************************************/
/* import UserController from './models/users.js'; */





const server = express();
const PORT = process.env.PORT || 5000;
/* console.log('hello', process.env.PORT) */
if (process.env.NODE_ENV != 'production') {
    server.use(morgan('dev'));
}

server.get('/', async (req, res) => res.send("Connection sucessfull!"))

      /* Useable routes *********************************************/
      .use('/users', users)
      .use('/comments', comments)
      .use('/local', local)
      .use('/edible', edible);


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
        await EdiblePinsModel.sync();

       /*  await model.sync();  */


        server.listen( PORT, console.log(`Server started on port: ${PORT}`.yellow));
        console.log('Connection: '.yellow + ' SUCCESS '.brightGreen.bold.bgBrightWhite);


    } catch (err) {
        console.error('Unable to connect' + err);
    }
  })();
 
  