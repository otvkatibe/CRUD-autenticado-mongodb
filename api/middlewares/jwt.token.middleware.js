import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Unauthorized' });
            }
            req.userId = decoded.id;
            next();
        });
    }
    catch (error) {
        console.error("Error verifying token:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export default verifyToken;