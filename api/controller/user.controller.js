import {
    createUser, 
    findUserByEmail 
} from '../services/user.services.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('Tentativa de registro:', { name, email });

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      console.log('Usuário já registrado:', email);
      return res.status(400).json({ message: 'Usuário já registrado.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Formato de email inválido.' });
    }

    if (!password) {
      return res.status(400).json({ message: 'Senha é obrigatória.' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'A senha deve ter pelo menos 8 caracteres.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hash da senha gerado com sucesso.');

    const user = await createUser({ name, email, password: hashedPassword });
    console.log('Usuário criado com sucesso:', user._id);

    res.status(201).json({ message: 'Usuário registrado com sucesso.', user });
  } catch (error) {
    console.log('Erro ao registrar usuário:', error.message);
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Formato de email inválido.' });
    }

    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      console.log('Usuário não encontrado:', email);
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    if (!user.password) {
      console.log('Erro: Hash da senha ausente no banco de dados.');
      return res.status(500).json({ message: 'Erro interno no servidor.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Senha inválida para o usuário:', email);
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log('Login bem-sucedido. Token gerado para o usuário:', user._id);
    res.status(200).json({ message: 'Login realizado com sucesso.', token });
  } catch (error) {
    console.log('Erro ao realizar login:', error.message);
    res.status(500).json({ message: 'Erro ao realizar login.' });
  }
};