import { Router, Request, Response } from 'express';
import Task from '../models/Task';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Get all tasks
router.get('/', authenticateToken, async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().populate('assigneeId', 'name email');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Get single task
router.get('/:id', authenticateToken, async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id).populate('assigneeId createdBy');

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

// Create new task
router.post('/', authenticateToken, async (req: Request, res: Response) => {
  try {
    const { title, description, priority, assigneeId, dueDate, tags } = req.body;

    const task = new Task({
      title,
      description,
      priority,
      assigneeId,
      createdBy: req.user.userId,
      dueDate,
      tags,
      status: 'pending'
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create task' });
  }
});

// Update task
router.put('/:id', authenticateToken, async (req: Request, res: Response) => {
  try {
    const { title, description, status, priority, assigneeId, dueDate, tags } = req.body;

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update fields
    if (title) task.title = title;
    if (description !== undefined) task.description = description;
    if (status) task.status = status;
    if (priority !== undefined) task.priority = priority;
    if (assigneeId !== undefined) task.assigneeId = assigneeId;
    if (dueDate !== undefined) task.dueDate = dueDate;
    if (tags) task.tags = tags;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update task' });
  }
});

// Delete task
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json({ message: 'Task deleted successfully' });
});

// TODO: Add filtering and sorting
// TODO: Add pagination
// TODO: Add task assignment validation
// TODO: Handle task comments deletion when task is deleted

export default router;