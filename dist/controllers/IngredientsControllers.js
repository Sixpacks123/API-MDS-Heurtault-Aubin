"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsControllers = void 0;
const CrudControllers_1 = require("./CrudControllers");
const ingredients_1 = require("../models/ingredients");
class IngredientsControllers extends CrudControllers_1.CrudController {
    read(req, res) {
        ingredients_1.Ingredients.findByPk(req.params.id)
            .then(ingredients => {
            res.json(ingredients);
        })
            .catch(err => { console.log(err); res.json("error"); });
    }
    create(req, res) {
        ingredients_1.Ingredients.create(req.body)
            .then(ingredients => res.json(ingredients))
            .catch(err => {
            res.json({ 'message': 'insertion impossible' });
        });
    }
    update(req, res) {
        let id = req.params.id;
        let ingredientsUpdate = req.body;
        ingredients_1.Ingredients.findByPk(id)
            .then(ingredients => {
            if (ingredients !== null) {
                ingredients.set(ingredientsUpdate);
                ingredients.save();
                res.json({ 'message': 'ingredients updated' });
            }
            else {
                res.json({ 'message': 'ingredients not updated' });
            }
        })
            .catch(err => {
            res.json({ 'message': 'modification impossible' });
        });
    }
}
exports.IngredientsControllers = IngredientsControllers;
