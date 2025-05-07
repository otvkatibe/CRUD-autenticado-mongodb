import User from '../models/User.js';

export const findUserById = async (id) => {
  try {
    return await User.findById(id);
  } catch (error) {
    console.log('Erro ao buscar usuário por ID:', error);
    throw new Error('Erro ao buscar usuário.');
  }
};

export const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    console.log('Erro ao criar usuário:', error);
    throw new Error('Erro ao criar usuário.');
  }
};

export const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email }).select('+password');
  } catch (error) {
    console.log('Erro ao buscar usuário por email:', error);
    throw new Error('Erro ao buscar usuário.');
  }
};