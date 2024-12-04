import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

interface UserAttributes {
    id: number;
    username: string;
    password: string;
    role: 'admin' | 'user';
}

class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public password!: string;
    public role!: 'admin' | 'user';
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },        
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user',
        }
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: false
    }
)

export default User;