import db from '../config/elephantSQL.js';
import Sequelize from 'sequelize';

const EdiblePinsModel = db.define("edible_pins", {
  
  id:           { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, 
  edible_id:    { type: Sequelize.STRING },
  user_id:      { type: Sequelize.INTEGER },
  lat:          { type: Sequelize.FLOAT },
  long:         { type: Sequelize.FLOAT },
  state_name:   { type: Sequelize.STRING }
});

export default EdiblePinsModel;