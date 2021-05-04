import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const SimilarsModel = db.define("similars", {       // table of similar edibles
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  edible_1_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  edible_2_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

export default SimilarsModel;