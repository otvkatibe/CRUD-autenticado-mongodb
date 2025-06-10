import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Logger } from '../utils/logger.js';

export class AuthService {
  static async hashPassword(password) {
    try {
      const saltRounds = 10;
      Logger.info('Gerando hash da senha');
      return await bcrypt.hash(password, saltRounds);
    } catch (error) {
      Logger.error('Erro ao gerar hash da senha', error);
      throw new Error('Erro ao processar senha.');
    }
  }

  static async comparePassword(password, hashedPassword) {
    try {
      Logger.info('Comparando senhas');
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      Logger.error('Erro ao comparar senhas', error);
      throw new Error('Erro ao verificar senha.');
    }
  }

  static generateToken(userId) {
    try {
      Logger.info('Gerando token JWT', { userId });
      return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '24h' });
    } catch (error) {
      Logger.error('Erro ao gerar token', error);
      throw new Error('Erro ao gerar token de autenticação.');
    }
  }

  static verifyToken(token) {
    try {
      Logger.info('Verificando token JWT');
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      Logger.error('Erro ao verificar token', error);
      throw new Error('Token inválido ou expirado.');
    }
  }
}