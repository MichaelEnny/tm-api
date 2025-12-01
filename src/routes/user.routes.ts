import { Router, Request, Response } from 'express';
import User from '../models/User';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Get user profile
router.get('/profile', authenticateToken, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req: Request, res: Response) => {
  const { name } = req.body;

  const user = await User.findById(req.user.userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (name) {
    user.name = name;
  }

  await user.save();
  res.json({ message: 'Profile updated', user });
});

// Get all users (for assignment purposes)
router.get('/', authenticateToken, async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('name email role');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// TODO: Add role-based access control
// TODO: Add user deletion
// TODO: Add profile picture upload

export default router;