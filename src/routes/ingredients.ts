import express, {Request, Response} from 'express';
import { IngredientsControllers } from '../controllers/IngredientsControllers';
import * as Auth    from '../middleware/authenticate';

const ingredientsControllers = new IngredientsControllers();

export const ingredientsRouter = express.Router({
    strict: true,
});

ingredientsRouter.route('/ingredients/show/:id').get(Auth.authorize(['admin']),ingredientsControllers.read)
ingredientsRouter.route('/ingredients/add').post(Auth.authorize(['admin']),ingredientsControllers.create)
ingredientsRouter.route('/ingredients/edit/:id').put(Auth.authorize(['admin']),ingredientsControllers.update)