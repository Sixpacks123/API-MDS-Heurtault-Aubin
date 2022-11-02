"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const CrudControllers_1 = require("./CrudControllers");
const Recipe_1 = require("../models/Recipe");
const course_1 = require("../models/course");
const Users_1 = require("../models/Users");
class RecipeController extends CrudControllers_1.CrudController {
    async read(req, res) {
        Recipe_1.Recipe.findByPk(req.params.id, { include: [course_1.Course, Users_1.Users] })
            .then(recipe => res.json(recipe))
            .catch(err => {
            console.log(err);
            res.json("error");
        });
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
