import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User';
import Task from '../models/Task';
import { logger } from '../utils/logger';

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/taskflow');

    logger.info('Connected to database');

    // Clear existing data
    await User.deleteMany({});
    await Task.deleteMany({});

    logger.info('Cleared existing data');

    // Create sample users
    const users = await User.create([
      {
        email: 'admin@taskflow.com',
        password: 'admin123',
        name: 'Admin User',
        role: 'admin'
      },
      {
        email: 'john@taskflow.com',
        password: 'password123',
        name: 'John Doe',
        role: 'user'
      }
    ]);

    logger.info('Created sample users');

    // Create sample tasks
    await Task.create([
      {
        title: 'Setup project structure',
        description: 'Initialize the project with proper folder structure',
        status: 'completed',
        priority: 'high',
        createdBy: users[0]._id
      },
      {
        title: 'Implement authentication',
        status: 'in-progress',
        createdBy: users[0]._id,
        assigneeId: users[1]._id
      }
    ]);

    logger.info('Created sample tasks');
    logger.info('Database seeded successfully');

    await mongoose.connection.close();
  } catch (error) {
    logger.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

// TODO: Add more sample data
// TODO: Add error handling for duplicate emails
// TODO: Add command line arguments for different seed scenarios