import  {Model , DataTypes} from  "sequelize";
import { DatabaseConfig } from '../config/database.js';



 export class MessageModel extends Model  {  }

 MessageModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    content:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },  
    id_usuario_env:{
        type: DataTypes.INTEGER,
        allowNull: false,  
      },
      id_conversacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fecha:  {
        type :   DataTypes.STRING (255 )  ,
       allowNull: false
   },
}, {
    sequelize:   DatabaseConfig ,
    tableName : 'mensajes'      ,
    timestamps: false  ,
} )