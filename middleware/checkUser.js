/* import pool from '../db/pg.js';

const checkUser = async (req , res, next) => {
    try {
        const { id } = req.params;
        const { rowCount } = await pool.query('SELECT * FROM "public"."users" WHERE id =$1', [id]);
        if(!rowCount) return res.stauts(404).json({message : `The user with id ${id} does not exist`});
        req.user = rows[0];
        next();
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export default checkUser; */