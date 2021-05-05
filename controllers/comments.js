import colors from 'colors';
import CommentsModel from '../models/comments.js';


export const getComment  = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

export const addComment  = async (req, res) => {
    try {
        const comment = await CommentsModel.create({ edible_id: 1, user_id: "2", body_text: "msg user 2" });
        console.log(colors.green(`New comment from user:  with id of: ${comment.id} `));
        res.json(`New comment from user: with id of: ${comment.id} `);
    } catch (error) {
        res.status(500).json(error.message);
    }
};  

export const updateComment  = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

export const deleteComment  = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};