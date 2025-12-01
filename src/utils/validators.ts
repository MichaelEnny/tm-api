// Custom validation utilities

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidObjectId = (id: string): boolean => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

// TODO: Add password strength validator
// TODO: Add date format validator
// TODO: Add phone number validator
// TODO: Add URL validator

export const validateTaskStatus = (status: string): boolean => {
  const validStatuses = ['pending', 'in-progress', 'completed'];
  return validStatuses.includes(status);
};

// Priority validation is missing!
// Tags validation is missing!