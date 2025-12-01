// Simple logging utility
// TODO: Replace with proper logging library (winston, pino, etc.)
// TODO: Add log levels
// TODO: Add file output
// TODO: Add structured logging

export const logger = {
  info: (message: string, meta?: any) => {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`, meta || '');
  },

  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error || '');
  },

  warn: (message: string) => {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
  }

  // debug level missing
};