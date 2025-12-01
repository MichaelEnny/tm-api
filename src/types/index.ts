// Global type definitions

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams {
  status?: string;
  priority?: string;
  assigneeId?: string;
  startDate?: Date;
  endDate?: Date;
}

// TODO: Add proper type definitions for request/response objects
// TODO: Add type definitions for JWT payload
// TODO: Add type definitions for query parameters