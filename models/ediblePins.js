import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const EdiblePinsModel = db.define("edible_Pins ", {
  
  id:           { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, 
  edible_id:    { type: Sequelize.STRING },
  lat:          { type: Sequelize.FLOAT },
  long:         { type: Sequelize.FLOAT }
});

export default EdiblePinsModel;