"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const Users_1 = require("../models/Users");
const CrudControllers_1 = require("./CrudControllers");
class UserController extends CrudControllers_1.CrudController {
    create(req, res) {
        Users_1.Users.create(req.body)
            .then(user => res.json(user))
            .catch(err => {
            console.log(err);
            res.json({ 'message': 'error creating user' });
        });
    }
}
exports.UserController = UserController;
