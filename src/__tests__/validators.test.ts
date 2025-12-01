import { isValidEmail, isValidObjectId, validateTaskStatus } from '../utils/validators';

describe('Validators', () => {
  describe('isValidEmail', () => {
    it('should return true for valid email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
    });

    it('should return false for invalid email', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
    });

    // Missing edge cases tests
  });

  describe('isValidObjectId', () => {
    it('should validate MongoDB ObjectId', () => {
      const validId = '507f1f77bcf86cd799439011';
      expect(isValidObjectId(validId)).toBe(true);
    });

    // Missing test for invalid ObjectId
  });

  describe('validateTaskStatus', () => {
    it('should validate task status', () => {
      expect(validateTaskStatus('pending')).toBe(true);
      expect(validateTaskStatus('completed')).toBe(true);
    });

    // TODO: Add test for invalid status
    // TODO: Add test for cancelled status (is it valid?)
  });
});

// Missing tests for priority validation
// Missing tests for date validators