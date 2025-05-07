import Workout from '../models/Workout.js';

export const createWorkout = async (workoutData) => {
  try {
    console.log('Criando treino no banco de dados:', workoutData);
    const workout = new Workout(workoutData);
    return await workout.save();
  } catch (error) {
    console.log('Erro ao criar treino no banco de dados:', error.message);
    throw new Error('Erro ao criar treino.');
  }
};

export const findWorkoutsByUserId = async (userId) => {
  try {
    console.log('Buscando treinos para o usuário:', userId);
    return await Workout.find({ userId });
  } catch (error) {
    console.log('Erro ao buscar treinos do usuário:', error.message);
    throw new Error('Erro ao buscar treinos.');
  }
};

export const findWorkoutByIdAndUserId = async (id, userId) => {
  try {
    return await Workout.findOne({ _id: id, userId });
  } catch (error) {
    console.log('Erro ao buscar treino por ID:', error);
    throw new Error('Erro ao buscar treino.');
  }
};

export const updateWorkoutById = async (id, userId, updateData) => {
  try {
    return await Workout.findOneAndUpdate(
      { _id: id, userId },
      updateData,
      { new: true }
    );
  } catch (error) {
    console.log('Erro ao atualizar treino:', error);
    throw new Error('Erro ao atualizar treino.');
  }
};

export const deleteWorkoutById = async (id, userId) => {
  try {
    return await Workout.findOneAndDelete({ _id: id, userId });
  } catch (error) {
    console.log('Erro ao deletar treino:', error);
    throw new Error('Erro ao deletar treino.');
  }
};