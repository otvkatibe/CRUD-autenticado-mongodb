export default {
  // Configuração básica
  testEnvironment: 'node',
  
  // ES Modules com Node.js experimental
  preset: null,
  transform: {},
  
  // Testes simples sem separação por projeto
  testMatch: [
    '**/__tests__/**/*.test.js',
    '**/tests/**/*.test.js'
  ],
  
  // Mocks globais
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  
  // Cobertura
  collectCoverageFrom: [
    'api/**/*.js',
    '!api/index.js',
    '!api/database/**'
  ],
  
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  
  testTimeout: 10000,
  verbose: true,
  
  // Configuração específica para ES modules
  globals: {
    'jest': {
      useESM: true
    }
  }
};