"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsRecipe = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const ingredients_1 = require("./ingredients");
const Recipe_1 = require("./Recipe");
class IngredientsRecipe extends sequelize_1.Model {
}
exports.IngredientsRecipe = IngredientsRecipe;
IngredientsRecipe.init({
    idIngredient: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: ingredients_1.Ingredients,
            key: 'id'
        }
    },
    idRecipe: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Recipe_1.Recipe,
            key: 'id'
        }
    },
    quantity: {
        type: sequelize_1.DataTypes.DOUBLE,
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "ingredients_recipes",
    timestamps: false
});
IngredientsRecipe.belongsTo(Recipe_1.Recipe, { foreignKey: "idRecipe" });
IngredientsRecipe.belongsTo(ingredients_1.Ingredients, { foreignKey: "idIngredient" });
