import { jest } from '@jest/globals';

// Mock do ObjectId
const mockObjectId = jest.fn();
mockObjectId.isValid = jest.fn(() => true);

// Mock do Schema com Types
class mockSchema {
    constructor(definition) {
        this.definition = definition;
    }
}
mockSchema.Types = {
  ObjectId: mockObjectId
};

// Mock completo do Mongoose
jest.mock('mongoose', () => ({
  connect: jest.fn().mockResolvedValue(true),
  connection: {
    readyState: 1,
    dropDatabase: jest.fn(),
    close: jest.fn(),
    collections: {}
  },
  Schema: mockSchema,
  model: jest.fn(() => ({
    save: jest.fn().mockResolvedValue({ _id: 'mock-id' }),
    find: jest.fn().mockResolvedValue([]),
    findById: jest.fn().mockResolvedValue({ _id: 'mock-id' }),
    findOne: jest.fn().mockResolvedValue({ _id: 'mock-id' }),
    findOneAndUpdate: jest.fn().mockResolvedValue({ _id: 'mock-id' }),
    findOneAndDelete: jest.fn().mockResolvedValue({ _id: 'mock-id' }),
    deleteMany: jest.fn().mockResolvedValue({})
  })),
  Types: {
    ObjectId: mockObjectId
  }
}));

// Mock do bcrypt
jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed-password'),
  compare: jest.fn().mockResolvedValue(true)
}));

// Mock do JWT
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(() => 'mock-jwt-token'),
  verify: jest.fn(() => ({ id: 'mock-user-id' }))
}));

// Mock do dotenv
jest.mock('dotenv', () => ({
  config: jest.fn()
}));

// Configurar variáveis de ambiente para testes
process.env.JWT_SECRET = 'test-jwt-secret';
process.env.NODE_ENV = 'test';

// Silenciar console durante os testes
global.console = {
  ...console,
  log: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn()
};