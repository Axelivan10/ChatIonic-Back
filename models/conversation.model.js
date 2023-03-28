import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class conversationModel extends Model { }

conversationModel.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user1     :{
        type: DataTypes.STRING (25),
        allowNull: false,
    },
    user2     :{
        type: DataTypes.STRING (25),
        allowNull: false,
    },
    }, {
        sequelize: DatabaseConfig,
        tableName: 'conversation',
        timestamps: false
    }
);