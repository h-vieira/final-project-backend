import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const EdiblesModel = db.define("edibles", {
  
  id:             { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name:           { type: Sequelize.STRING, allowNull: false },
  scientificName: { type: Sequelize.STRING, allowNull: true },
  desc:           { type: Sequelize.TEXT },
  sensory_desc:   { type: Sequelize.TEXT },
  climate_desc:   { type: Sequelize.TEXT },
  climate_type:   { type: Sequelize.STRING },
  harvest_desc:   { type: Sequelize.STRING },
  image:          { type: Sequelize.STRING },
  author:         { type: Sequelize.STRING, defaultValue: 'current user' },// i need to pass hte value here
  edible:         { type: Sequelize.BOOLEAN, defaultValue: false },
  hidden:         { type: Sequelize.BOOLEAN, defaultValue: true }
});

export default EdiblesModel;