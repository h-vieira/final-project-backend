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
        const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{6,})");
        if (!EMAIL_REGEX.test(email))  throw new Error('Enter a valid Email <example@domain.com>');
        if (!strongRegex.test(password)) throw new Error('Your password must have at least  6 characters, include one number [0-9] and a lowercase letter');

        const verifyUser = await db.query(`SELECT * from users WHERE email ='${email}'`);
        if(verifyUser[1].rowCount) throw new Error('This Email is already taken'); /* return res.status(403).json({error: 'This Email is already taken' }); */

        const hashPassword = await bcrypt.hash(password , 6);

        //since it returns a prommisse I can destructor (user) and take values it will have { id, name } 
        const { id, lastName: name } = await UsersModel.create({ firstName, lastName, email, password: hashPassword });  
        //check the tokken at jwt.io :D
        const token = jwt.sign({id, name }, process.env.JWT_SECRET);

        res.send({token});

    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

export const signIn = async (req, res) => {
 try {
    const { email, password } = req.body;
    const verifyUser = await db.query(`SELECT * from users WHERE email ='${email}'`);
    if(!verifyUser[1].rowCount) throw new Error('The email address or password is incorrect. Please try again.');
    const match = await bcrypt.compare(password, verifyUser[1].rows[0].password);
    if(!match) throw new Error('The password is incorrect. Please try again.');

     const token = jwt.sign({ id: verifyUser[1].rows[0].id, name: verifyUser[1].rows[0].firstName }, process.env.JWT_SECRET);

    res.json({ token });


 } catch (error) {
    res.status(500).json({ error: error.message});
 }
};

export const logout = async (req, res) => {

};

export const getMyInfo = async (req, res) => {
    try {
        res.send(req.user);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

export const aprovedSession = async (req, res) => {
    try {
        res.json({ success: 'Valid token'});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};
