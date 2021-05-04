import colors from 'colors';
import UsersModel from '../models/users.js';



export const getAllUsers = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const createUser = async (req, res) => {
   try {
        const user = await UsersModel.create({ firstName: "test", lastName: "tester", email: "tester.zv@gmail.com", password: "1234" });
        console.log(colors.green(`New user: ${user} with id of: ${user.id} `))
   } catch (error) {
        res.status(500).json(error.message);    
   }
};