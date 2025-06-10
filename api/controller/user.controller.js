import { UserService } from '../services/user.service.js';
import { UserValidator } from '../validators/user.validator.js';
import { ResponseHandler } from '../utils/response.handler.js';
import { Logger } from '../utils/logger.js';
import { AuthService } from '../services/auth.service.js';

export class UserController {
  static async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;
      Logger.info('Tentativa de registro', { name, email });

      // Validar dados de entrada
      const validation = UserValidator.validateRegisterUser({ name, email, password });
      if (!validation.isValid) {
        return ResponseHandler.badRequest(res, 'Dados inválidos', validation.errors);
      }

      // Verificar se usuário já existe
      const existingUser = await UserService.findUserByEmail(email);
      if (existingUser) {
        Logger.info('Usuário já registrado', { email });
        return ResponseHandler.badRequest(res, 'Usuário já registrado.');
      }

      // Criar usuário com senha criptografada
      const hashedPassword = await AuthService.hashPassword(password);
      const user = await UserService.createUser({ 
        name: name.trim(), 
        email: email.toLowerCase().trim(), 
        password: hashedPassword 
      });

      Logger.info('Usuário criado com sucesso', { id: user._id });
      return ResponseHandler.created(res, { id: user._id, name: user.name, email: user.email }, 'Usuário registrado com sucesso.');
    } catch (error) {
      Logger.error('Erro ao registrar usuário', error);
      return ResponseHandler.error(res, 'Erro ao registrar usuário.');
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      Logger.info('Tentativa de login', { email });

      // Validar dados de entrada
      const validation = UserValidator.validateLoginUser({ email, password });
      if (!validation.isValid) {
        return ResponseHandler.badRequest(res, 'Dados inválidos', validation.errors);
      }

      // Buscar usuário
      const user = await UserService.findUserByEmail(email);
      if (!user) {
        Logger.info('Usuário não encontrado', { email });
        return ResponseHandler.unauthorized(res, 'Credenciais inválidas.');
      }

      // Verificar senha
      const isPasswordValid = await AuthService.comparePassword(password, user.password);
      if (!isPasswordValid) {
        Logger.info('Senha inválida', { email });
        return ResponseHandler.unauthorized(res, 'Credenciais inválidas.');
      }

      // Gerar token
      const token = AuthService.generateToken(user._id);
      Logger.info('Login bem-sucedido', { userId: user._id });
      
      return ResponseHandler.success(res, { token }, 'Login realizado com sucesso.');
    } catch (error) {
      Logger.error('Erro ao realizar login', error);
      return ResponseHandler.error(res, 'Erro ao realizar login.');
    }
  }
}

// Exportar métodos para compatibilidade
export const registerUser = UserController.registerUser;
export const loginUser = UserController.loginUser;