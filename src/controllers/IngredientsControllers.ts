import { sequelize } from '../config/database';
import { Request, response, Response } from "express";
import { CrudController } from "./CrudControllers";
import { Ingredients } from '../models/ingredients';
import { request } from 'http';

export class IngredientsControllers extends CrudController{
    public read(req: Request, res: Response): void {
        Ingredients.findByPk(req.params.id)
        .then(ingredients =>{
            res.json(ingredients)})
        .catch(err =>{console.log(err);res.json("error")});
      }
    public create(req: Request, res: Response): void {
        Ingredients.create(req.body)
        .then(ingredients =>res.json(ingredients))
        .catch(err => {
          res.json({'message':'insertion impossible'})
        })
      }
      public update(req: Request, res: Response): void {
        let id = req.params.id;
        let ingredientsUpdate = req.body
  
        Ingredients.findByPk(id)
        .then(ingredients =>{
          if(ingredients !== null) {
            ingredients.set(ingredientsUpdate);
            ingredients.save();
            res.json({'message':'ingredients updated'})
          }else{
            res.json({'message':'ingredients not updated'})
          }
          
          })
        .catch(err => {
          res.json({'message':'modification impossible'})
        });
        
      }

}