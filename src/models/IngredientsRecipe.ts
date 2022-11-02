import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Ingredients } from './ingredients';
import { Recipe } from './Recipe';

export class IngredientsRecipe extends Model
{
    declare idIngredient: number;
    declare idRecipe: number;
    declare quantity: string;
}

IngredientsRecipe.init({
        idIngredient: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Ingredients,
                key: 'id'
            }
        },
        idRecipe: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Recipe,
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.DOUBLE,
        }
    },
    {
        sequelize,
        tableName: "ingredients_recipes",
        timestamps: false
    }
    );

IngredientsRecipe.belongsTo(Recipe, { foreignKey: "idRecipe" });
IngredientsRecipe.belongsTo(Ingredients, { foreignKey: "idIngredient" });
