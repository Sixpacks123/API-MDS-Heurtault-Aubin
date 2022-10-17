import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database' 
//import { User } from './User';

export class Permission extends Model
{
    public id!: number;
    public role!: string;
}

Permission.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    menu: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
{
    sequelize,
    tableName: "permissions",
    timestamps: false
}
);

