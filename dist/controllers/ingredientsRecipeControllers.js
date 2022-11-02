"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientsRecipeControllers = void 0;
const CrudControllers_1 = require("./CrudControllers");
const IngredientsRecipe_1 = require("../models/IngredientsRecipe");
class ingredientsRecipeControllers extends CrudControllers_1.CrudController {
    read(req, res) {
    }
    create(req, res) {
        IngredientsRecipe_1.IngredientsRecipe.create(req.body)
            .then(ingredientsRecipe => res.json(ingredientsRecipe))
            .catch(err => {
            res.json({ 'message': 'insertion impossible' });
        });
    }
}
exports.ingredientsRecipeControllers = ingredientsRecipeControllers;
