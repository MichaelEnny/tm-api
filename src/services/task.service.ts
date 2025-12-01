import Task, { ITask } from '../models/Task';
import mongoose from 'mongoose';

export class TaskService {
  async getAllTasks(userId: string) {
    return await Task.find().populate('assigneeId', 'name email');
  }

  async getTaskById(taskId: string) {
    return await Task.findById(taskId).populate('assigneeId createdBy');
  }

  async createTask(taskData: Partial<ITask>) {
    const task = new Task(taskData);
    return await task.save();
  }

  // TODO: Add filtering logic
  // TODO: Add pagination logic
  // TODO: Add sorting logic
  // TODO: Add authorization checks (user can only see their tasks?)
}

// Service layer is only partially implemented
// Not used consistently across all routes
// Some routes call models directly, others should use this service