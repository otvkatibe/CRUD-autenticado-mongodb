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
  },
  
  projects: [
    {
      displayName: 'unit',
      testMatch: [
        '<rootDir>/tests/basic.test.js',
        '<rootDir>/tests/controllers.test.js',
        '<rootDir>/tests/middlewares.test.js',
        '<rootDir>/tests/services.test.js',
        '<rootDir>/tests/utils.test.js',
        '<rootDir>/tests/validators.test.js'
      ],
      testPathIgnorePatterns: ['integration']
    },
    {
      displayName: 'integration',
      testMatch: [
        '<rootDir>/tests/integration.test.js'
      ]
    }
  ]
};