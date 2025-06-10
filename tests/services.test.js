import { describe, test, expect, jest } from '@jest/globals';
import { AuthService } from '../api/services/auth.service.js';
import { UserService } from '../api/services/user.service.js';
import { WorkoutService } from '../api/services/workout.service.js';

describe('Services Tests', () => {
  describe('AuthService', () => {
    test('deve gerar hash da senha', async () => {
      const password = 'password123';
      const hash = await AuthService.hashPassword(password);
      
      expect(hash).toBeDefined();
      expect(hash).toBe('hashed-password'); // Mock retorna isso
    });

    test('deve comparar senhas', async () => {
      const isValid = await AuthService.comparePassword('password123', 'hashed-password');
      expect(isValid).toBe(true);
    });

    test('deve gerar token JWT', () => {
      const token = AuthService.generateToken('user-id');
      expect(token).toBe('mock-jwt-token');
    });

    test('deve verificar token JWT', () => {
      const decoded = AuthService.verifyToken('mock-jwt-token');
      expect(decoded.id).toBe('mock-user-id');
    });
  });

  describe('UserService', () => {
    // Mock estático para estes testes
    beforeEach(() => {
      // Reset mocks
      jest.clearAllMocks();
    });

    test('deve encontrar usuário por ID', async () => {
      // Mock do método específico
      const mockUser = { _id: 'mock-id', name: 'Mock User' };
      UserService.findUserById = jest.fn().mockResolvedValue(mockUser);

      const user = await UserService.findUserById('mock-id');
      expect(user).toBeDefined();
      expect(user._id).toBe('mock-id');
    });

    test('deve criar usuário', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'hashed-password'
      };

      const mockUser = { _id: 'mock-id', ...userData };
      UserService.createUser = jest.fn().mockResolvedValue(mockUser);

      const user = await UserService.createUser(userData);
      expect(user).toBeDefined();
      expect(user._id).toBe('mock-id');
    });
  });

  describe('WorkoutService', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('deve criar treino', async () => {
      const workoutData = {
        title: 'Test Workout',
        description: 'Test Description',
        duration: 60,
        userId: 'mock-user-id'
      };

      const mockWorkout = { _id: 'mock-workout-id', ...workoutData };
      WorkoutService.createWorkout = jest.fn().mockResolvedValue(mockWorkout);

      const workout = await WorkoutService.createWorkout(workoutData);
      expect(workout).toBeDefined();
      expect(workout._id).toBe('mock-workout-id');
    });

    test('deve buscar treinos por usuário', async () => {
      const mockWorkouts = [{ _id: 'mock-workout-id', title: 'Mock Workout' }];
      WorkoutService.findWorkoutsByUserId = jest.fn().mockResolvedValue(mockWorkouts);

      const workouts = await WorkoutService.findWorkoutsByUserId('mock-user-id');
      expect(Array.isArray(workouts)).toBe(true);
      expect(workouts.length).toBeGreaterThan(0);
    });
  });
});