import colors from 'colors';
import db from '../config/elephantSQL.js';
import CommentsModel from '../models/comments.js';


export const getComment = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export const addComment  = async (req, res) => {
    try {
        const { id } = req.params
        const comment = await CommentsModel.create({ 
            edible_id: 1, 
            user_id: id, 
            body_text: "msg user 2" 
        });
        res.json(`New comment from user: with id of: ${comment.id} `);

    } catch (error) {
        res.status(500).json(error.message);
    }
};  

export const updateComment  = async (req, res) => {
    try {
        /* const { body_text } = req.body; */
        const { text } = req.params
        await CommentsModel.update({
            body_text: 'updatedd' 
        }, {
            where: {
                id: text
              }
        });
        res.send(`Comment: ${text} updated `);
        
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const deleteComment  = async (req, res) => {
    try {
        const { text } = req.params;
        await db.query( `DELETE FROM comments WHERE "id" = '${text}'` );
        res.send(`Comment with id: ${text} was deleted`);

    } catch (error) {
        res.status(500).json(error.message);
    }
};