import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const NutrientsModel = db.define("nutrients ", {       // table of nutrients
  
  id:         { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  edible_id:  { type: Sequelize.INTEGER, allowNull: false},
  item:       { type: Sequelize.STRING },
  value:      { type: Sequelize.INTEGER }
});

export default NutrientsModel;