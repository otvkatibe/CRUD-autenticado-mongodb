import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      console.log('Token não fornecido.');
      return res.status(401).json({ message: 'Token não fornecido.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log('Token inválido ou expirado:', err.message);
        return res.status(403).json({ message: 'Token inválido ou expirado.' });
      }
      console.log('Token verificado com sucesso. UserID:', decoded.id);
      req.userId = decoded.id;
      next();
    });
  } catch (error) {
    console.log('Erro ao verificar token:', error.message);
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
};

export default verifyToken;