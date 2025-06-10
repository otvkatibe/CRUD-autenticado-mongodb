import { WorkoutService } from '../services/workout.service.js';
import { UserService } from '../services/user.service.js';
import { WorkoutValidator } from '../validators/workout.validator.js';
import { ResponseHandler } from '../utils/response.handler.js';
import { Logger } from '../utils/logger.js';

export class WorkoutController {
  static async createWorkout(req, res) {
    try {
      const { title, description, duration } = req.body;
      const userId = req.userId;

      // Verificar se usuário existe
      const userExists = await UserService.findUserById(userId);
      if (!userExists) {
        return ResponseHandler.notFound(res, 'Usuário não encontrado.');
      }

      // Validar dados de entrada
      const validation = WorkoutValidator.validateCreateWorkout({ title, description, duration });
      if (!validation.isValid) {
        return ResponseHandler.badRequest(res, 'Dados inválidos', validation.errors);
      }

      Logger.info('Tentativa de criar treino', { title, description, duration, userId });

      const workout = await WorkoutService.createWorkout({
        title: title.trim(),
        description: description.trim(),
        duration,
        userId
      });

      return ResponseHandler.created(res, workout, 'Treino criado com sucesso.');
    } catch (error) {
      Logger.error('Erro ao criar treino', error);
      return ResponseHandler.error(res, 'Erro ao criar treino.');
    }
  }

  static async getWorkouts(req, res) {
    try {
      const userId = req.userId;
      const workouts = await WorkoutService.findWorkoutsByUserId(userId);

      if (!workouts || workouts.length === 0) {
        return ResponseHandler.notFound(res, 'Nenhum treino encontrado para este usuário.');
      }

      return ResponseHandler.success(res, workouts, 'Treinos encontrados com sucesso.');
    } catch (error) {
      Logger.error('Erro ao listar treinos', error);
      return ResponseHandler.error(res, 'Erro ao listar treinos.');
    }
  }

  static async getWorkoutById(req, res) {
    try {
      const { id } = req.params;
      const userId = req.userId;

      const workout = await WorkoutService.findWorkoutByIdAndUserId(id, userId);
      if (!workout) {
        Logger.info('Treino não encontrado', { id, userId });
        return ResponseHandler.notFound(res, 'Treino não encontrado.');
      }

      Logger.info('Treino encontrado', { id: workout._id });
      return ResponseHandler.success(res, workout, 'Treino encontrado com sucesso.');
    } catch (error) {
      Logger.error('Erro ao obter treino', error);
      return ResponseHandler.error(res, 'Erro ao obter treino.');
    }
  }

  static async updateWorkout(req, res) {
    try {
      const { id } = req.params;
      const userId = req.userId;
      const updateData = req.body;

      // Validar dados de atualização
      const validation = WorkoutValidator.validateUpdateWorkout(updateData);
      if (!validation.isValid) {
        return ResponseHandler.badRequest(res, 'Dados inválidos', validation.errors);
      }

      // Limpar dados de string
      if (updateData.title) updateData.title = updateData.title.trim();
      if (updateData.description) updateData.description = updateData.description.trim();

      const workout = await WorkoutService.updateWorkoutById(id, userId, updateData);
      if (!workout) {
        return ResponseHandler.notFound(res, 'Treino não encontrado.');
      }

      return ResponseHandler.success(res, workout, 'Treino atualizado com sucesso.');
    } catch (error) {
      Logger.error('Erro ao atualizar treino', error);
      return ResponseHandler.error(res, 'Erro ao atualizar treino.');
    }
  }

  static async patchWorkout(req, res) {
    // Reutilizar a mesma lógica do updateWorkout
    return WorkoutController.updateWorkout(req, res);
  }

  static async deleteWorkout(req, res) {
    try {
      const { id } = req.params;
      const userId = req.userId;

      const workout = await WorkoutService.deleteWorkoutById(id, userId);
      if (!workout) {
        return ResponseHandler.notFound(res, 'Treino não encontrado.');
      }

      return ResponseHandler.success(res, null, 'Treino deletado com sucesso.');
    } catch (error) {
      Logger.error('Erro ao deletar treino', error);
      return ResponseHandler.error(res, 'Erro ao deletar treino.');
    }
  }
}

// Exportar métodos para compatibilidade
export const createWorkout = WorkoutController.createWorkout;
export const getWorkout = WorkoutController.getWorkouts;
export const getWorkoutById = WorkoutController.getWorkoutById;
export const updateWorkout = WorkoutController.updateWorkout;
export const patchWorkout = WorkoutController.patchWorkout;
export const deleteWorkout = WorkoutController.deleteWorkout;
