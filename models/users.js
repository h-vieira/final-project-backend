import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const UsersModel = db.define("users", {

  id:           { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, 
  firstName:    { type: Sequelize.STRING, allowNull: false },
  lastName:     { type: Sequelize.STRING, allowNull: false },
  email:        { type: Sequelize.STRING, allowNull: false },
  password:     { type: Sequelize.STRING, allowNull: false },
  can_comment:  { type: Sequelize.BOOLEAN, defaultValue: true},
  banned:       { type: Sequelize.BOOLEAN, defaultValue: false},
  userAuth:     { type: Sequelize.STRING, allowNull: false, defaultValue: 'basic' },
  nickName:     { type: Sequelize.STRING }
});


/* Relations */
/* import CommentsModel from './comments.js'

UsersModel.hasMany(CommentsModel); 
CommentsModel.belongsTo(UsersModel); */

export default UsersModel;