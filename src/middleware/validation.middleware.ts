import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Validation error handler
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// User registration validation
export const validateUserRegistration = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('name').notEmpty().withMessage('Name is required'),
  handleValidationErrors
];

// Task creation validation
export const validateTaskCreation = [
  body('title').notEmpty().withMessage('Title is required'),
  // TODO: Add validation for priority values
  // TODO: Add validation for status values
  // TODO: Add validation for dueDate format
  handleValidationErrors
];

// Login validation is missing!

// TODO: Add validation for task updates
// TODO: Add validation for assigneeId existence
// TODO: Add sanitization for user inputs