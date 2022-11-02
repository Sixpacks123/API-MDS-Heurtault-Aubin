import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database' 

export class Ingredients extends Model
{
    declare id: number;
    declare name: string;
}

Ingredients.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        sequelize,
        tableName: "ingredients",
        timestamps: false
    }
    );