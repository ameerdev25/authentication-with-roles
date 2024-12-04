import User from "../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret12345';

export async function login(username: string, password: string) {
    const user = await User.findOne({ where: { username } });
    if (!user) throw new Error('User not found');

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) throw new Error('Invalid password');

    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: '1h' }
    )

    return token;
}