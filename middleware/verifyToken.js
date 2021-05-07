import jwt from 'jsonwebtoken';
import db from '../config/elephantSQL.js';
import UsersModel from '../models/users.js';


const verifyToken = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if(!token) return res.status(403).json({ error: 'Forbidden'});
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await db.query( `SELECT * FROM users WHERE id = ${id}` );
        console.log(user[1].rowCount)
        if (!user[1].rowCount) throw Error(' user does not exist');
        req.user = user[0];
        next();

    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

export default verifyToken;