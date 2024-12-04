import { Request, Response } from "express";
import * as authService from '../services/authService';

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);
        res.json({ token });
        // Token can be decrypt to obtain user information to used later using jwt.verify(token, JWT_SECRET);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
}