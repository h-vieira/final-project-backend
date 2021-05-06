/* jwp to create a user tokken */
import jwt from 'jsonwebtoken';   
/* bcrypt to encrypt the password */
import bcrypt from 'bcrypt';     

/* Models */
import UsersModel from '../models/users.js';
import db from '../config/elephantSQL.js';

export const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const verifyUser = await db.query(`SELECT * from users WHERE email ='${email}'`);
        if(verifyUser[1].rowCount) throw new Error('This Email is already taken'); /* return res.status(403).json({error: 'This Email is already taken' }); */

        const hashPassword = await bcrypt.hash(password , 6);

        //since it returns a prommisse I can destructor (user) and take values it will have { id, name } 
        const { id, lastName: name } = await UsersModel.create({ firstName, lastName, email, password: hashPassword });  
        //check the tokken at jwt.io :D
        const tokken = jwt.sign({id, name }, process.env.JWT_SECRET);

        res.send(`New user with id of: ${id} created `);

    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

export const signIn = async (req, res) => {
 try {
    const { email, password } = req.body;
    const verifyUser = await db.query(`SELECT * from users WHERE email ='${email}'`);
    if(verifyUser[1].rowCount) throw new Error('The email address or password is incorrect. Please try again.');
    res.json(verifyUser);

    // test this in postman ##############################################################################################################################
    // video a 1:40:41segundos 

 } catch (error) {
    res.status(500).json({ error: error.message});
 }
};

export const logout = async (req, res) => {

};
