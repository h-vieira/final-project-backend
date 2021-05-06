import colors from 'colors';
import db from '../config/elephantSQL.js';
import EdiblePinsModel from '../models/ediblePins.js';


export const getEdiblePins = async (req, res) => {
    try {
        res.send("this route is not complete"); //not complete
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
export const pinEdible = async (req, res) => {
    try {
        const { id } = req.params;
        /* const { lat, long , stateName} =  req.body; */
        const pin = await EdiblePinsModel.create({ 
            edible_id: id, 
            user_id: "3",
            lat:  52.4234234234, 
            long: 12.2345345345,
            state_name: 'hamburg'
        });
        res.send(`New pin: ${pin.id} `);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getUserPins = async (req, res) => {
    try {
        const { id } = req.params;
        const userPins = await db.query(`SELECT * from edible_pins WHERE user_id = '${id}'`);
        if (!userPins[1].rowCount) return res.status(404).json({ message: `This user has no pins` });
        res.send(userPins[1].rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const deteleUserPin = async (req, res) => {
    try {
        const { id, pin } = req.params;
        await db.query( `DELETE FROM edible_Pins WHERE user_id = '${id}' AND id = '${pin}'` );
        res.send(`Pin: ${pin} deleted`);
        
    } catch (error) {
        res.status(500).json(error.message);
    }
};