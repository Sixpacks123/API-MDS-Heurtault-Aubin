"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const CrudControllers_1 = require("./CrudControllers");
const User_1 = require("../models/User");
class UserController extends CrudControllers_1.CrudController {
    create(req, res) { }
    async read(req, res) {
        const user = await User_1.User.findByPk(req.params.id);
        if (user === null) {
            console.log('Not found!');
        }
        else {
            console.log(user instanceof User_1.User); // true
            // Its primary key is 123
            res.json(user);
        }
    }
}
exports.UserController = UserController;
