import { sequelize } from '../config/database';
import { Request, response, Response } from "express";
import { CrudController } from "./CrudControllers";
import { Recipe } from '../models/Recipe';
import { request } from 'http';
import { IngredientsRecipe } from '../models/IngredientsRecipe';
import { Ingredients } from '../models/ingredients';
import { Course } from '../models/course';
import { Users } from '../models/Users';

export class RecipeController extends CrudController{
    public  async read(req: Request, res: Response): Promise<void> {
      Recipe.findByPk(req.params.id, {include: [Course, Users]})
      .then(recipe =>res.json(recipe))
      .catch(err =>{console.log(err);
        res.json("error")});
    }

    public create(req: Request, res: Response): void {
      Recipe.create(req.body)
      .then(recipe =>res.json(recipe))
      .catch(err => {
        res.json({'message':'insertion impossible'})
      })
    }
    public update(req: Request, res: Response): void {
      let id = req.params.id;
      let recipeUpdate = req.body

      Recipe.findByPk(id)
      .then(recipe =>{
        if(recipe !== null) {
          recipe.set(recipeUpdate);
          recipe.save();
          res.json({'message':'recipe updated'})
        }else{
          res.json({'message':'recipe not updated'})
        }
        
        })
      .catch(err => {
        res.json({'message':'modification impossible'})
      });
      
    }

}