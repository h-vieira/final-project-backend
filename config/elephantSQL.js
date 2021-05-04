import 'dotenv/config.js';          /* PGSTRING */
import Sequelize from 'sequelize';

const db = new Sequelize(process.env.PGSTRING, { pool: { max: 1 } });

export default db;