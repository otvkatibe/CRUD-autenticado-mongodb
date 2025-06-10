import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { ResponseHandler } from '../api/utils/response.handler.js';
import { Logger } from '../api/utils/logger.js';

describe('Utils Tests', () => {
  describe('ResponseHandler', () => {
    let mockRes;

    beforeEach(() => {
      mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
    });

    test('success deve retornar resposta padronizada', () => {
      const data = { id: 1 };
      const message = 'Sucesso';

      ResponseHandler.success(mockRes, data, message);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        success: true,
        message,
        data
      });
    });

    test('error deve retornar erro padronizado', () => {
      ResponseHandler.error(mockRes, 'Erro', 500);

      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'Erro'
        })
      );
    });

    test('created deve retornar 201', () => {
      const data = { id: 1 };
      const message = 'Criado';

      ResponseHandler.created(mockRes, data, message);

      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({
        success: true,
        message,
        data
      });
    });

    test('notFound deve retornar 404', () => {
      ResponseHandler.notFound(mockRes, 'Não encontrado');

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'Não encontrado'
        })
      );
    });

    test('badRequest deve retornar 400', () => {
      const errors = ['Erro 1', 'Erro 2'];
      
      ResponseHandler.badRequest(mockRes, 'Dados inválidos', errors);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'Dados inválidos',
          errors
        })
      );
    });

    test('unauthorized deve retornar 401', () => {
      ResponseHandler.unauthorized(mockRes, 'Não autorizado');

      expect(mockRes.status).toHaveBeenCalledWith(401);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'Não autorizado'
        })
      );
    });
  });

  describe('Logger', () => {
    test('deve ter todos os métodos necessários', () => {
      expect(typeof Logger.info).toBe('function');
      expect(typeof Logger.error).toBe('function');
      expect(typeof Logger.warn).toBe('function');
      expect(typeof Logger.debug).toBe('function');
    });

    test('info deve ser executado sem erro', () => {
      expect(() => {
        Logger.info('Teste de info', { test: true });
      }).not.toThrow();
    });

    test('error deve ser executado sem erro', () => {
      expect(() => {
        Logger.error('Teste de erro', new Error('Erro teste'));
      }).not.toThrow();
    });

    test('warn deve ser executado sem erro', () => {
      expect(() => {
        Logger.warn('Teste de warning', { warning: true });
      }).not.toThrow();
    });

    test('debug deve ser executado sem erro', () => {
      expect(() => {
        Logger.debug('Teste de debug', { debug: true });
      }).not.toThrow();
    });
  });
});