import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class UserModel extends Model {}

UserModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    firstname:{
        type: DataTypes.STRING (25),
        allowNull: true
    },
    secondname:{
        type: DataTypes.STRING (25),
        allowNull: true
    },
    imgperfil:{
        type: DataTypes.STRING(255),
        allowNull:true
    },
    email:{
        type: DataTypes.STRING (25),
        allowNull: true
    },
    password:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    online:{
        type: DataTypes.STRING (10),
        allowNull:true
    },
    // socket_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true
    // },
},  {
    sequelize: DatabaseConfig,
    tableName: 'users',
    timestamps: false
}

);