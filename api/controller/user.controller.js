import { 
    findUserById, 
    createUser, 
    findUserByEmail 
} from '../services/user.services.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se o usuário já existe
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já registrado.' });
    }

    // Verificar se a senha foi fornecida
    if (!password) {
      return res.status(400).json({ message: 'Senha é obrigatória.' });
    }

    // Gerar o hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hash da senha gerado:', hashedPassword);

    // Criar o usuário
    const user = await createUser({ name, email, password: hashedPassword });
    console.log('Usuário criado:', user);

    res.status(201).json({ message: 'Usuário registrado com sucesso.', user });
  } catch (error) {
    console.log('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    if (!user.password) {
      console.log('Erro: Hash da senha ausente no banco de dados.');
      return res.status(500).json({ message: 'Erro interno no servidor.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login realizado com sucesso.', token });
  } catch (error) {
    console.log('Erro ao realizar login:', error);
    res.status(500).json({ message: 'Erro ao realizar login.' });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await findUserById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log('Erro ao buscar perfil do usuário:', error);
    res.status(500).json({ message: 'Erro ao buscar perfil do usuário.' });
  }
};