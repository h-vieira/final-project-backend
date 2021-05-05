import colors from 'colors';
import db from '../config/elephantSQL.js';
import UsersModel from '../models/users.js';


export const getUser = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const createUser = async (req, res) => {
   try {
        const user = await UsersModel.create({ firstName: "test", lastName: "tester", email: "tester.zv@gmail.com", password: "1234" });
        console.log(colors.green(`New user: ${user} with id of: ${user.id} `))
        res.send(`New user with id of: ${user.id} `);
   } catch (error) {
        res.status(500).json(error.message);    
   }
};

export const updateUser= async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};


export const deleteUser= async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

export const getUserPosts= async (req, res) => {
    try {
        const { id } = req.params;
        console.log("the id is:".red + id);
        const UserPosts = await db.query(
            
            `SELECT 
                U.id, U."firstName", 
                C.id, 
                C.body_text as msg 
            FROM  
                users as U 
            LEFT JOIN
                comments as C 
            ON 
                U.id = C.user_id
            WHERE
                U.id = ${id}`,
            
            {
                model: UsersModel,
            }
        );
        res.json(UserPosts);
    } catch (error) {
        res.status(500).json(error.message);   
    }
};