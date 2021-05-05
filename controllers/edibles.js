import colors from 'colors';
import db from '../config/elephantSQL.js';
import EdiblesModel from '../models/edibles.js';
import EdiblePinsModel from '../models/edibles.js';

export const getAllEdibles = async (req, res) => {
    try {
        const allTheEdibles = await db.query( `SELECT * FROM "edibles"`);
        if (!allTheEdibles[1].rowCount) return res.status(404).json({ message: `No entries on the database were found` });
        res.send(allTheEdibles[1].row);

    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getsingeEdible = async (req, res) => {
    try {
        const { id } = req.params;
        const edible = await db.query( `SELECT * FROM "edibles" WHERE id = ${id}`);
        if (!edible[1].rowCount) return res.status(404).json({ message: `This is not eddible...` });
        res.send(edible[1].row);

    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const createEdible = async (req, res) => {
    try {
       /*  const { name, scientificName, desc, sensory_desc, climate_desc, climate_type, harvest_desc, author } = req.body; */
        const edible = await EdiblesModel.create({
            name: 'Plant 1',
            scientificName: 'plantis-verdis',
            desc: 'a green plant',
            sensory_desc: 'rough to the touch and crunchy',
            climate_desc: 'it rains a lot',
            climate_type: 'Marine west coast',
            harvest_desc: ' pick it by the roots',
            image: 'https://c.stocksy.com/a/103000/z9/11533.jpg',
            author: 'El Professor',
            edible: false,
            hidden: true
        });
        res.send(`A new edible with id:${edible.id} was created!`);

    } catch (error) {
        res.status(500).json(error.message); 
    }
};

export const updateEdible = async (req, res) => {
    try {   
        const { id } = req.params;
        await EdiblesModel.update({
            name: 'Plant 1 updated',
            scientificName: 'plantis-verdis updated ',
            desc: 'a green plant updated',
            sensory_desc: 'rough to the touch and crunchy updated',
            climate_desc: 'it rains a lot updated',
            climate_type: 'Marine west coast updated',
            harvest_desc: ' pick it by the roots updated',
            image: 'https://c.stocksy.com/a/103000/z9/11533.jpg',
            author: 'El Professor updated',
            edible: true,
            hidden: false
        }, {
            where: {
                id: id
              }
        });
        res.send(`Edible: ${id} updated `);

    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const deleteEdible = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query( `DELETE FROM edibles WHERE id = ${id}` );
        res.send(`Edible with id: ${id} was deleted`);

    } catch (error) {
        res.status(500).json(error.message);
    }
};
