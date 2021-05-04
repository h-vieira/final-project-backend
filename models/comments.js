import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const CommentsModel = db.define("comments", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  edible_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

export default CommentsModel;