import { AuthService } from '../services/auth.service.js';
import { ResponseHandler } from '../utils/response.handler.js';
import { Logger } from '../utils/logger.js';

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
      Logger.warn('Token não fornecido');
      return ResponseHandler.unauthorized(res, 'Token não fornecido.');
    }

    const decoded = AuthService.verifyToken(token);
    Logger.info('Token verificado com sucesso', { userId: decoded.id });
    
    req.userId = decoded.id;
    next();
  } catch (error) {
    Logger.error('Erro ao verificar token', error);
    return ResponseHandler.unauthorized(res, 'Token inválido ou expirado.');
  }
};

export default verifyToken;