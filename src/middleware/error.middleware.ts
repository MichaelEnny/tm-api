import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  // Default error response
  res.status(500).json({ error: 'Internal server error' });
};

// TODO: Add specific error types
// TODO: Add error logging service integration
// TODO: Different error responses for development vs production