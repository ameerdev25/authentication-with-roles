import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET || 'secret12345';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).send('Access denied');

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send('Invalid token');
        (req as any).user = user;
        next();
    });
}

export function authorizeRole(role: 'admin' | 'user') {
    return (req: Request, res: Response, next: NextFunction) => {
        if ((req as any).user.role !== role) return res.status(403).send('Access denied');
        next();
    }
}