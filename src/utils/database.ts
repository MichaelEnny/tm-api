import mongoose from 'mongoose';
import { logger } from './logger';

export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/taskflow';

    await mongoose.connect(mongoUri);

    logger.info('Database connected successfully');

    mongoose.connection.on('error', (err) => {
      logger.error('Database connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      logger.warn('Database disconnected');
    });
  } catch (error) {
    logger.error('Failed to connect to database:', error);
    process.exit(1);
  }
};

// TODO: Add connection retry logic
// TODO: Add connection pooling configuration
// TODO: Add graceful shutdown handling
// TODO: Add database health check endpoint