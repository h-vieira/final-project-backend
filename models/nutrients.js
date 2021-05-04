import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const NutrientsModel = db.define("nutrients ", {       // table of nutrients
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  item: {
    type: Sequelize.STRING
  },
  value: {
    type: Sequelize.INTEGER
  }
});

export default NutrientsModel;