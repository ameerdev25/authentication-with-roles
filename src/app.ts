import express from "express";
import sequelize from "./config/database";
import authRoutes from "./routes/authRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/auth', authRoutes);

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    })
