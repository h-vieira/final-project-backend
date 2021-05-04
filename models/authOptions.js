import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const AuthOptionsModel = db.define("auth_options", {    
   
  id:             { type: Sequelize.UUID, allowNull: false, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  auth_id:        { type: Sequelize.INTEGER, },
  auth_control:   { type: Sequelize.BOOLEAN, defaultValue: false },
  ban_user:       { type: Sequelize.BOOLEAN, defaultValue: false },
  block_user:     { type: Sequelize.BOOLEAN, defaultValue: false },
  del_msg:        { type: Sequelize.BOOLEAN, defaultValue: false },
  put_content:    { type: Sequelize.BOOLEAN, defaultValue: false },
  verify_content: { type: Sequelize.BOOLEAN, defaultValue: false },
});

export default AuthOptionsModel;