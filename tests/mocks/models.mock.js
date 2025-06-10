import { jest } from '@jest/globals';

// Mock para User Model
export const mockUserModel = jest.fn().mockImplementation((data) => ({
  ...data,
  _id: 'mock-user-id',
  save: jest.fn().mockResolvedValue({ 
    _id: 'mock-user-id', 
    name: data?.name || 'Mock User',
    email: data?.email || 'mock@test.com'
  })
}));

// Adicionar métodos estáticos
mockUserModel.findById = jest.fn().mockResolvedValue({ 
  _id: 'mock-user-id', 
  name: 'Mock User' 
});
mockUserModel.findOne = jest.fn().mockResolvedValue({ 
  _id: 'mock-user-id', 
  email: 'mock@test.com',
  password: 'hashed-password'
});
mockUserModel.deleteMany = jest.fn().mockResolvedValue({});

// Mock para Workout Model
export const mockWorkoutModel = jest.fn().mockImplementation((data) => ({
  ...data,
  _id: 'mock-workout-id',
  save: jest.fn().mockResolvedValue({ 
    _id: 'mock-workout-id', 
    title: data?.title || 'Mock Workout',
    userId: data?.userId || 'mock-user-id'
  })
}));

// Adicionar métodos estáticos
mockWorkoutModel.find = jest.fn().mockResolvedValue([{ 
  _id: 'mock-workout-id', 
  title: 'Mock Workout' 
}]);
mockWorkoutModel.findOne = jest.fn().mockResolvedValue({ 
  _id: 'mock-workout-id', 
  title: 'Mock Workout' 
});
mockWorkoutModel.findOneAndUpdate = jest.fn().mockResolvedValue({ 
  _id: 'mock-workout-id', 
  title: 'Updated Workout' 
});
mockWorkoutModel.findOneAndDelete = jest.fn().mockResolvedValue({ 
  _id: 'mock-workout-id' 
});
mockWorkoutModel.deleteMany = jest.fn().mockResolvedValue({});