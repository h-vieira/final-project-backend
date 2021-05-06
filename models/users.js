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
  nickName:     { type: Sequelize.STRING, defaultValue: " " }
});

//    Foreign Key should be on the tables that cannot live by themselfs. In this case a comment needs a user to exist.
//    Sequalize will autogenerate this keys on the creation of the comment, therefor I dont need to assign user_id inside
//    the UserModel. + + + Here is a good explanation + + + https://www.youtube.com/watch?v=A1dAHmzpcX0 


/* Relations */ 
/* import CommentsModel from './comments.js'

UsersModel.hasMany(CommentsModel); 
CommentsModel.belongsTo(UsersModel); */

export default UsersModel;