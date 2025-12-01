import { Request, Response } from 'express';
import { TaskService } from '../services/task.service';

const taskService = new TaskService();

export class TaskController {
  async getTasks(req: Request, res: Response) {
    try {
      const tasks = await taskService.getAllTasks(req.user.userId);
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }

  // TODO: Add other controller methods
  // TODO: Add proper error handling
  // TODO: Add input validation
}

// Controller layer exists but not used in routes
// Shows architectural inconsistency - should routes use controllers or call services directly?