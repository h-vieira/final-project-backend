import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const SimilarsModel = db.define("similars", {       // table of similar edibles

  id:           { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  edible_1_id:  { type: Sequelize.INTEGER, allowNull: false },
  edible_2_id:  { type: Sequelize.INTEGER, allowNull: false }
});

export default SimilarsModel;