import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const UsersModel = db.define("users", {

  id:           { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4,  primaryKey: true },
  firstName:    { type: Sequelize.STRING, allowNull: false },
  lastName:     { type: Sequelize.STRING, allowNull: false },
  email:        { type: Sequelize.STRING, allowNull: false },
  password:     { type: Sequelize.STRING, allowNull: false },
  can_comment:  { type: Sequelize.BOOLEAN, defaultValue: true},
  banned:       { type: Sequelize.BOOLEAN, defaultValue: false},
  userAuth:     { type: Sequelize.STRING, allowNull: false, defaultValue: 'basic' }
});


/* Relations */
/* import CommentsModel from './comments.js'
UsersModel.belongsTo(CommentsModel); */ //pass here a option obj as a second parameter


export default UsersModel;