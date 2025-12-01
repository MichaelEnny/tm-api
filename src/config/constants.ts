// Application constants

export const TASK_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed'
  // 'cancelled' status exists in some places but not defined here
};

export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  MANAGER: 'manager'
};

export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

// TODO: Add API rate limits
// TODO: Add pagination defaults
// TODO: Add file upload limits
// TODO: Add session timeout values

export const JWT_EXPIRY = '24h';

// Some constants used in code but not defined here