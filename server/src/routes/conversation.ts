import express from 'express';
import { In } from 'typeorm';
import { Conversation } from '../entities/Conversation';
import { Message } from '../entities/Message';
import { User } from '../entities/User';
import { isAuthenticated } from '../middleware/auth';
import { AuthenticatedRequest } from '../types';

const router = express.Router();


/**
 * Create Conversations
 * Authenticated Route
 */
 
router.post('/', isAuthenticated, async (req: AuthenticatedRequest, res) => {
  try {
    const {users:userIds, name}: {users: string[], name:string} = req.body

    const users = await User.find({where:{id: In([...userIds])}})

    if(users.length === 0){
        return res.status(404).json({
          message: 'you need to send valid users',
        });
      
    }
    let conversationName = name;
    if(!name || name === "" ){
      conversationName = users.map(user=>user.firstName).join(",")
    }

    const conversation =  Conversation.create({
      users,
      name: conversationName
    })

    await conversation.save()

    res.json(conversation)
    // return res.json({users});
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

/**
 * Get Conversation by Id
 * Authenticated Route
 */
 router.get('/:id', isAuthenticated, async (req: AuthenticatedRequest, res) => {
  try {
    const conversation = await Conversation.findOne({
      where: {
        id:+req.params.id,
      },
      relations:{
        users:true,
        messages:{sender:true}
      }
    });
    if (!conversation) {
      return res.status(404).json({
        message: 'Conversation not found',
      });
    }

    const loggedInUserIncluded = conversation.users.map(u=>u.email).includes(req.email)
    if(!loggedInUserIncluded){
      return res.status(401).json({
        message: 'User is not part of the conversation',
      });
    }

    return res.json(conversation);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

/**
 * Add Message to Conversation Conversation
 * Authenticated Route
 */

 router.post('/:id/message', isAuthenticated, async (req: AuthenticatedRequest, res) => {
  try {
    const {body}: {body:string} = req.body

    const conversation = await Conversation.findOne({
      where: {
        id:+req.params.id,
      },
      relations:{
        users:true,
        messages:{sender:true}
      }
    });
    if (!conversation) {
      return res.status(404).json({
        message: 'Conversation not found',
      });
    }

    const loggedInUserIncluded = conversation.users.map(u=>u.email).includes(req.email)
    if(!loggedInUserIncluded){
      return res.status(401).json({
        message: 'User is not part of the conversation',
      });
    }


    const message =  Message.create({
      conversation,
      body
    })

    await message.save()

    res.json(message)
    // return res.json({users});
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});


export { router as conversationRouter };
