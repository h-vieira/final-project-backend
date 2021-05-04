import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const UsersModel = db.define("users", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userAuth: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'basic'
  }
});

export default UsersModel;