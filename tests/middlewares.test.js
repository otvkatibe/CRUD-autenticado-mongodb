import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { validateObjectId } from '../api/middlewares/objeto.middleware.js';
import mongoose from 'mongoose';

describe('Middlewares Tests', () => {
  describe('validateObjectId', () => {
    let mockReq, mockRes, mockNext;

    beforeEach(() => {
      mockReq = { params: {} };
      mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      mockNext = jest.fn();
    });

    test('deve passar com ObjectId válido', () => {
      mockReq.params.id = '507f1f77bcf86cd799439011';

      validateObjectId(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalled();
      expect(mockRes.status).not.toHaveBeenCalled();
    });

    test('deve rejeitar ObjectId inválido', () => {
      jest.spyOn(mongoose.Types.ObjectId, 'isValid').mockReturnValueOnce(false);
      
      mockReq.params.id = 'invalid-id';

      validateObjectId(mockReq, mockRes, mockNext);

      expect(mockNext).not.toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'ID inválido.'
        })
      );
    });
  });
});