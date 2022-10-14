import express, {Request, Response} from 'express';
import { UserController } from '../controllers/UserController';

const userController = new UserController();

export const router = express.Router({
    strict: true,
});

router.route('/recipe/show/:id').get(userController.read);
