import mongoose from 'mongoose';
import { ResponseHandler } from '../utils/response.handler.js';
import { Logger } from '../utils/logger.js';

export const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    Logger.warn('ID inválido fornecido', { id });
    return ResponseHandler.badRequest(res, 'ID inválido.');
  }
  
  next();
};