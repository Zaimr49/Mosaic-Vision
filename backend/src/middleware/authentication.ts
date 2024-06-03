// src/middlewares/authentication.ts
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';

dotenv.config();

interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    email: string;
  };
}

const authentication = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized', message: 'Invalid JWT token' });
  }
  
  const token = authHeader.split(' ')[1];

  try {
    const decryptedData = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    req.user = { userId: decryptedData.userId, email: decryptedData.email };
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized', message: 'Invalid JWT token' });
  }
};

export default authentication;
