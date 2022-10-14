import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('bien-manger', 'root' ,'', {
    host : 'localhost',
    dialect:'mysql'
} )