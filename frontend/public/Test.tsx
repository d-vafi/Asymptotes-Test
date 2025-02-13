import { add, subtract, multiply, divide } from '../math';

describe('Math Utilities', () => {
  describe('add()', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add a positive and a negative number', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract()', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(subtract(2, 5)).toBe(-3);
    });
  });

  describe('multiply()', () => {
    it('should multiply two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should return zero if one operand is zero', () => {
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('divide()', () => {
    it('should divide two numbers', () => {
      expect(divide(6, 2)).toBe(3);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(6, 0)).toThrow('Division by zero');
    });
  });
});
