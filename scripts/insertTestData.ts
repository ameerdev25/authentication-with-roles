import bcrypt from 'bcryptjs';
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rbac',
    password: 'postgres',
    port: 5433,
});

async function insertTestData() {
    try {
        const users = [
            { username: 'admin', password: 'admin', role: 'admin' },
            { username: 'user1', password: 'password1', role: 'user' },
            { username: 'user2', password: 'password2', role: 'user' },
            { username: 'user3', password: 'password3', role: 'user' },
        ];

        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);

            const query = `
                INSERT INTO users (username, password, role)
                VALUES ($1, $2, $3)
                RETURNING id, username, role;
            `;

            const values = [user.username, hashedPassword, user.role];

            const result = await pool.query(query, values);
            console.log("Inserted user:", result.rows[0]);
        }

        console.log('Test data inserted successfully.');
    } catch (error) {
        console.error('Error inserting test data:', error);
    } finally {
        await pool.end();
    }
}

insertTestData();