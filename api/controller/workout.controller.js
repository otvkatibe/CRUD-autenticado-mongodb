import { createWorkout as createWorkoutService, findWorkoutsByUserId, findWorkoutByIdAndUserId, updateWorkoutById, deleteWorkoutById } from '../services/workout.services.js';
import { findUserById } from '../services/user.services.js';

export const createWorkout = async (req, res) => {
  try {
    const { title, description, duration } = req.body;

    const userExists = await findUserById(req.userId);
    if (!userExists) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    console.log('Tentativa de criar treino:', { title, description, duration, userId: req.userId });

    if (!title || !description || !duration) {
      return res.status(400).json({ message: 'Título, descrição e duração são obrigatórios.' });
    }

    const workout = await createWorkoutService({
      ...req.body,
      userId: req.userId,
    });

    console.log('Treino criado com sucesso:', workout._id);
    res.status(201).json(workout);
  } catch (error) {
    console.log('Erro ao criar treino:', error.message);
    res.status(500).json({ message: 'Erro ao criar treino.' });
  }
};

export const getWorkout = async (req, res) => {
  try {
    const workouts = await findWorkoutsByUserId(req.userId);

    if (!workouts || workouts.length === 0) {
      return res.status(404).json({ message: "Nenhum treino encontrado para este usuário." });
    }

    res.status(200).json(workouts);
  } catch (error) {
    console.log("Erro ao listar treinos:", error.message);
    res.status(500).json({ message: "Erro ao listar treinos." });
  }
};

export const getWorkoutById = async (req, res) => {
    try {
        const workout = await findWorkoutByIdAndUserId(req.params.id, req.userId);
        if (!workout) {
            console.log('Treino não encontrado:', req.params.id);
            return res.status(404).json({ message: "Treino não encontrado" });
        }
        console.log('Treino encontrado:', workout._id);
        res.status(200).json(workout);
    } catch (error) {
        console.log("Erro ao obter treino:", error.message);
        res.status(500).json({ message: "Erro ao obter treino" });
    }
}

export const updateWorkout = async (req, res) => {
    try {
        const workout = await updateWorkoutById(req.params.id, req.userId, req.body);
        if (!workout) {
            return res.status(404).json({ message: "Treino não encontrado" });
        }
        res.status(200).json(workout);
    } catch (error) {
        console.log("Erro ao atualizar treino:", error);
        res.status(500).json({ message: "Erro ao atualizar treino" });
    }
}

export const patchWorkout = async (req, res) => {
    try {
        const workout = await updateWorkoutById(req.params.id, req.userId, req.body);
        if (!workout) {
            return res.status(404).json({ message: "Treino não encontrado" });
        }
        res.status(200).json(workout);
    } catch (error) {
        console.log("Erro ao atualizar treino de forma parcial:", error);
        res.status(500).json({ message: "Erro ao atualizar treino de forma parcial" });
    }
}

export const deleteWorkout = async (req, res) => {
    try {
        const workout = await deleteWorkoutById(req.params.id, req.userId);
        if (!workout) {
            return res.status(404).json({ message: "Treino não encontrado" });
        }
        res.status(200).json({ message: "Treino deletado com sucesso" });
    } catch (error) {
        console.log("Erro ao deletar treino:", error);
        res.status(500).json({ message: "Erro ao deletar treino" });
    }
}
