"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("../authenticate/jwt");
const constants_1 = require("../config/constants");
const Users_1 = require("../models/Users");
const CrudControllers_1 = require("./CrudControllers");
class UserController extends CrudControllers_1.CrudController {
    async signin(req, res) {
        let userInfo = req.body;
        userInfo.password = await (0, bcrypt_1.hash)(userInfo.password, constants_1.BCRYPT_ROUND);
        Users_1.Users.create(req.body)
            .then(users => {
            let name = users.lastname;
            let msg = "l'utilisateur  " + name + " a été ajouté";
            res.json({ "message ": msg });
        })
            .catch(err => {
            console.log(err);
            res.json({ 'message': 'insertion impossible' });
        });
    }
    async login(req, res) {
        const plainPassword = req.body.password;
        const mail = req.body.email;
        const user = await Users_1.Users.findOne({ where: { mail: mail } });
        if (user === null) {
            res.json({ "message": 'invalid credentials' });
        }
        else {
            const isMatch = await (0, bcrypt_1.compare)(plainPassword, user.password);
            if (!isMatch) {
                res.json({ "message": 'invalid credentials' });
            }
            else {
                res.json({ "token": (0, jwt_1.generateToken)() });
            }
        }
    }
}
exports.UserController = UserController;
