import colors from 'colors';
import db from '../config/elephantSQL.js';


const localEdibles = async (req, res) => {      //get edibles in your current state
    try {
        const { stateName } = req.params;
        const localEdibles = await db.query( `SELECT distinct edible_id from edible_pins where state_name = '${stateName}' order by edible_id asc` );
        if (!localEdibles[1].rowCount) return res.status(404).json({ message: `There are no entryes for this location` });
        res.send(localEdibles[1].rows);

    } catch (error) {
        res.status(500).json(error.message);
    }
};

export default localEdibles;