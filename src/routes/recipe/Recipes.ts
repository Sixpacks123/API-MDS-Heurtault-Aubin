import express, {Request, Response} from 'express';
import { RecipeController } from '../../controllers/RecipeController';
import * as Auth    from '../../middleware/authenticate';
const recipeController = new RecipeController();

export const router = express.Router({
    strict: true,
});

router.route('/recipe/show/:id').get(Auth.authorize(['admin']),recipeController.read)
router.route('/recipe/add').post(Auth.authorize(['admin']),recipeController.create)
router.route('/recipe/edit/:id').put(Auth.authorize(['admin']),recipeController.update)