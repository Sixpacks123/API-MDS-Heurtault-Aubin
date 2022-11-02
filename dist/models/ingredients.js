"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredients = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Ingredients extends sequelize_1.Model {
}
exports.Ingredients = Ingredients;
Ingredients.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "ingredients",
    timestamps: false
});
