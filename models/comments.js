import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const CommentsModel = db.define("comments", {
  
  id:         { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  edible_id:  { type: Sequelize.INTEGER, allowNull: false },
  user_id:    { type: Sequelize.INTEGER, allowNull: false },
  body_text:  { type: Sequelize.TEXT }
});


/* import UsersModel from './users.js';
CommentsModel.belongsTo(UsersModel); */


export default CommentsModel;