import { describe, test, expect } from '@jest/globals';

describe('Basic Test', () => {
  test('deve executar teste básico', () => {
    expect(1 + 1).toBe(2);
  });

  test('deve verificar se Jest está funcionando', () => {
    const testObj = { name: 'test' };
    expect(testObj).toHaveProperty('name');
    expect(testObj.name).toBe('test');
  });
});