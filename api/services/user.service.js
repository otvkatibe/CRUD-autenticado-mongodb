import User from '../models/user.model.js';
import { Logger } from '../utils/logger.js';

export class UserService {
  static async findUserById(id) {
    try {
      Logger.info('Buscando usuário por ID', { id });
      return await User.findById(id);
    } catch (error) {
      Logger.error('Erro ao buscar usuário por ID', error);
      throw new Error('Erro ao buscar usuário.');
    }
  }

  static async createUser(userData) {
    try {
      Logger.info('Criando usuário', { email: userData.email });
      const user = new User(userData);
      const savedUser = await user.save();
      Logger.info('Usuário criado com sucesso', { id: savedUser._id });
      return savedUser;
    } catch (error) {
      Logger.error('Erro ao criar usuário', error);
      throw new Error('Erro ao criar usuário.');
    }
  }

  static async findUserByEmail(email) {
    try {
      Logger.info('Buscando usuário por email', { email });
      return await User.findOne({ email }).select('+password');
    } catch (error) {
      Logger.error('Erro ao buscar usuário por email', error);
      throw new Error('Erro ao buscar usuário.');
    }
  }
}

// Manter exports originais para compatibilidade
export const findUserById = UserService.findUserById;
export const createUser = UserService.createUser;
export const findUserByEmail = UserService.findUserByEmail;