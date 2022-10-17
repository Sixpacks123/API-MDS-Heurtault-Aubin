import {Model, DataTypes} from 'sequelize' 
import { sequelize } from '../config/database' 
import { Permission } from './permission';
export class Users extends Model 
{ 
    public id!: number; 
    public lastname!: string; 
    public firstname!: string; 
    public mail!: string; 
    public password! : string; 
    public idPermission! : number;

} 

Users.init({ 
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true, 
        allowNull: false 
      }, 
    lastname: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    firstname: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    mail: { 
        type: DataTypes.STRING, 
        allowNull: false, 
    }, 
    password: { 
        type: DataTypes.STRING, 
        allowNull: false,
    }, 
    idPermission:{
        type: DataTypes.INTEGER, 
        allowNull: false ,
        references: {
            model: 'Permission',
            key: 'id'
        }
    }

}, 
{ 
    sequelize, 
    tableName: "users" ,
    timestamps: false
    

}); 

Permission.hasOne(Users, {foreignKey: "idPermission"})