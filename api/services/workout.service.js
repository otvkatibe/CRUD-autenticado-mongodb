import Workout from '../models/workout.model.js';
import { Logger } from '../utils/logger.js';

export class WorkoutService {
  static async createWorkout(workoutData) {
    try {
      Logger.info('Criando treino no banco de dados', { workoutData });
      const workout = new Workout(workoutData);
      const savedWorkout = await workout.save();
      Logger.info('Treino criado com sucesso', { id: savedWorkout._id });
      return savedWorkout;
    } catch (error) {
      Logger.error('Erro ao criar treino no banco de dados', error);
      throw new Error('Erro ao criar treino.');
    }
  }

  static async findWorkoutsByUserId(userId) {
    try {
      Logger.info('Buscando treinos para o usuário', { userId });
      return await Workout.find({ userId });
    } catch (error) {
      Logger.error('Erro ao buscar treinos do usuário', error);
      throw new Error('Erro ao buscar treinos.');
    }
  }

  static async findWorkoutByIdAndUserId(id, userId) {
    try {
      Logger.info('Buscando treino por ID e usuário', { id, userId });
      return await Workout.findOne({ _id: id, userId });
    } catch (error) {
      Logger.error('Erro ao buscar treino por ID', error);
      throw new Error('Erro ao buscar treino.');
    }
  }

  static async updateWorkoutById(id, userId, updateData) {
    try {
      Logger.info('Atualizando treino', { id, userId, updateData });
      const updatedWorkout = await Workout.findOneAndUpdate(
        { _id: id, userId },
        updateData,
        { new: true }
      );
      if (updatedWorkout) {
        Logger.info('Treino atualizado com sucesso', { id });
      }
      return updatedWorkout;
    } catch (error) {
      Logger.error('Erro ao atualizar treino', error);
      throw new Error('Erro ao atualizar treino.');
    }
  }

  static async deleteWorkoutById(id, userId) {
    try {
      Logger.info('Deletando treino', { id, userId });
      const deletedWorkout = await Workout.findOneAndDelete({ _id: id, userId });
      if (deletedWorkout) {
        Logger.info('Treino deletado com sucesso', { id });
      }
      return deletedWorkout;
    } catch (error) {
      Logger.error('Erro ao deletar treino', error);
      throw new Error('Erro ao deletar treino.');
    }
  }
}