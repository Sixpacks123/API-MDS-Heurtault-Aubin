"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const CrudControllers_1 = require("./CrudControllers");
const Recipe_1 = require("../models/Recipe");
class RecipeController extends CrudControllers_1.CrudController {
    read(req, res) {
        Recipe_1.Recipe.findByPk(req.params.id).then(recipe => res.json(recipe)).catch(err => { console.log(err); res.json("error"); });
    }
    create(req, res) {
        Recipe_1.Recipe.create(req.body)
            .then(recipe => res.json(recipe))
            .catch(err => {
            res.json({ 'message': 'insertion impossible' });
        });
    }
    update(req, res) {
        let id = req.params.id;
        let recipeUpdate = req.body;
        Recipe_1.Recipe.findByPk(id)
            .then(recipe => {
            if (recipe !== null) {
                recipe.set(recipeUpdate);
                recipe.save();
                res.json({ 'message': 'recipe updated' });
            }
            else {
                res.json({ 'message': 'recipe not updated' });
            }
        })
            .catch(err => {
            res.json({ 'message': 'modification impossible' });
        });
    }
}
exports.RecipeController = RecipeController;
