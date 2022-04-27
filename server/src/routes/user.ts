import express from 'express';
import { User } from '../entities/User';
import { isAuthenticated } from '../middleware/auth';
import { AuthenticatedRequest } from '../types';
import { caseInsensitiveSearch, getUserByEmail } from '../utils';

const router = express.Router();

// TODO: Get all friends for user
/**
 * Get all users on app
 *  
 */
router.get('/users', isAuthenticated, async (req: AuthenticatedRequest, res) => {
  try {
    const user = await getUserByEmail(req.email)
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    const users = await User.find()

    return res.json(users);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

/**
 * Get All Conversations for user
 * Authenticated Route
 */
 router.get('/conversations', isAuthenticated, async (req: AuthenticatedRequest, res) => {
  try {
    const {conversations} = await User.findOne({
      where: {
          email: caseInsensitiveSearch(req.email),
      },
      relations:{
        conversations: {
          users: true,
          messages: {sender: true}
        }
      }
  });

    return res.json(conversations);
  } catch (error) {
    console.log({error})
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

export { router as userRouter };
