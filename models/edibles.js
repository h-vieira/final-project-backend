import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const EdiblesModel = db.define("edibles", {
  
  edible_id:      { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name:           { type: Sequelize.STRING, allowNull: false },
  scientificName: { type: Sequelize.STRING, allowNull: true },
  desc:           { type: Sequelize.TEXT },
  sensory_desc:   { type: Sequelize.TEXT },
  climate_desc:   { type: Sequelize.TEXT },
  climate_type:   { type: Sequelize.STRING },
  harvest_desc:   { type: Sequelize.STRING },
  author:         { type: Sequelize.STRING, defaultValue: 'current user' },// i need to pass hte value here
  edible:         { type: Sequelize.BOOLEAN, defaultValue: false },
});

export default EdiblesModel;