import colors from 'colors';
import db from '../config/elephantSQL.js';
import UsersModel from '../models/users.js';


export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await db.query( `SELECT * FROM users WHERE id = ${id}` );
        if (!user[1].rowCount) return res.status(404).json({ message: `User with id ${id} not found` });
        res.send(user[1].rows);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

/* export const createUser = async (req, res) => {
   try {
        //const { firstName, lastName, email, password} = req.body;
        const user = await UsersModel.create({ 
            firstName: 'test', 
            lastName: 'test', 
            email: 'tester.zv@gmail.com', 
            password: '1234',
            nickname: "test_test"
        });
        res.send(`New user with id of: ${user.id} `);
   } catch (error) {
        res.status(500).json(error.message);    
   }
}; */

export const updateUser= async (req, res) => {
    try {
        const { id } = req.params;
        /* const { firstName, lastName, email, password} = req.body; */
        await UsersModel.update({
            firstName: 'updated', 
            lastName: 'updated', 
            email: 'update.zv@gmail.com', 
            password: '4321',
            nickName: 'updated_v2'
        }, {
            where: {
                id: id
              }
        });
        res.send(`User: ${id} updated `);
        
    } catch (error) {
        res.status(500).json(error.message);
    }
};


export const deleteUser= async (req, res) => {
    try {
        const { id } = req.params;
        await db.query( `DELETE FROM users WHERE id = ${id}` );
        res.send(`User with id: ${id} was deleted`);

    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getUserPosts= async (req, res) => {
    try {
        const { id } = req.params;
        const userPosts = await db.query(
            
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
        res.json({userPosts});

    } catch (error) {
        res.status(500).json(error.message);   
    }
};