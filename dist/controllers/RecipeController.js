"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const CrudControllers_1 = require("./CrudControllers");
const Recipe_1 = require("../models/Recipe");
class RecipeController extends CrudControllers_1.CrudController {
    create(req, res) { }
    read(req, res) {
        Recipe_1.Recipe.findByPk(req.params.id).then(recipe => res.json(recipe)).catch(err => { console.log(err); res.json("error"); });
    }
}
exports.RecipeController = RecipeController;
