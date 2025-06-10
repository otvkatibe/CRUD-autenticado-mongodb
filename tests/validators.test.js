import { describe, test, expect } from '@jest/globals';
import { UserValidator } from '../api/validators/user.validator.js';
import { WorkoutValidator } from '../api/validators/workout.validator.js';

describe('Validators Tests', () => {
  describe('UserValidator', () => {
    test('deve validar dados de usuário corretos', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      };

      const result = UserValidator.validateRegisterUser(validData);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('deve rejeitar nome vazio', () => {
      const invalidData = {
        name: '',
        email: 'john@example.com',
        password: 'password123'
      };

      const result = UserValidator.validateRegisterUser(invalidData);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Nome é obrigatório.');
    });

    test('deve rejeitar email inválido', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'invalid-email',
        password: 'password123'
      };

      const result = UserValidator.validateRegisterUser(invalidData);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Formato de email inválido.');
    });

    test('deve rejeitar senha curta', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: '123'
      };

      const result = UserValidator.validateRegisterUser(invalidData);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('A senha deve ter pelo menos 8 caracteres.');
    });
  });

  describe('WorkoutValidator', () => {
    test('deve validar dados de treino corretos', () => {
      const validData = {
        title: 'Test Workout',
        description: 'Test Description',
        duration: 60
      };

      const result = WorkoutValidator.validateCreateWorkout(validData);
      
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('deve rejeitar título vazio', () => {
      const invalidData = {
        title: '',
        description: 'Test Description',
        duration: 60
      };

      const result = WorkoutValidator.validateCreateWorkout(invalidData);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Título é obrigatório.');
    });

    test('deve rejeitar duração inválida', () => {
      const invalidData = {
        title: 'Test Workout',
        description: 'Test Description',
        duration: -5
      };

      const result = WorkoutValidator.validateCreateWorkout(invalidData);
      
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Duração deve ser um número positivo.');
    });
  });
});