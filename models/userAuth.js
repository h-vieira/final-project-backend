import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const UserAuthsModel = db.define("user_auths", {       
  
  id:   { type: Sequelize.INTEGER, primaryKey: true },
  auth: { type: Sequelize.STRING }
});

export default UserAuthsModel;