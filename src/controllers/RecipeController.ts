import { sequelize } from '../config/database';
import { Request, response, Response } from "express";
import { CrudController } from "./CrudControllers";
import { Recipe } from '../models/Recipe';
import { request } from 'http';

export class RecipeController extends CrudController{
    public  read(req: Request, res: Response): void {
      Recipe.findByPk(req.params.id).then(recipe =>res.json(recipe)).catch(err =>{console.log(err);res.json("error")});
    }

    public create(req: Request, res: Response): void {
      Recipe.create(req.body)
      .then(recipe =>res.json(recipe))
      .catch(err => {
        res.json({'message':'insertion impossible'})
      })
    }

}