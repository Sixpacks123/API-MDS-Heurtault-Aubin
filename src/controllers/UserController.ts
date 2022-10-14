import { sequelize } from '../config/database';
import { Request, response, Response } from "express";
import { CrudController } from "./CrudControllers";
import { User } from '../models/User';
import { request } from 'http';

export class UserController extends CrudController{
    create(req: Request, res: Response): void {}
    public async read(req: Request, res: Response): Promise<void> {
        const user =  await User.findByPk(req.params.id);
        if (user === null) {
          console.log('Not found!');
        } else {
          console.log(user instanceof User); // true
          // Its primary key is 123
          res.json(user)
        }
    }

}