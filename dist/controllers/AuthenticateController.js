"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateController = void 0;
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("../authenticate/jwt");
const constants_1 = require("../config/constants");
const Users_1 = require("../models/Users");
const CrudControllers_1 = require("./CrudControllers");
const http_status_1 = __importDefault(require("http-status"));
const console_1 = __importDefault(require("console"));
class AuthenticateController extends CrudControllers_1.CrudController {
    async login(req, res) {
        const mail = req.body.mail;
        const plainPassword = req.body.password;
        const user = await Users_1.Users.findOne({ where: { mail: mail } });
        if (user) {
            res.status(http_status_1.default.UNAUTHORIZED).json({ message: "Invalid credential" });
            return;
        }
        const bMacth = await (0, bcrypt_1.compare)(plainPassword, user.password);
        if (!bMacth) {
            res.status(http_status_1.default.UNAUTHORIZED).json({ message: "Invalid credential" });
        }
        res.status(http_status_1.default.OK).json({ 'token': (0, jwt_1.generateToken)(user.lastname, user.id, 'admin') });
    }
    /**
     * signin
     */
    signin(req, res) {
        let userInfo = req.body;
        (0, bcrypt_1.hash)(userInfo.password, constants_1.BCRYPT_ROUND)
            .then((hashedPassword) => {
            userInfo.password = hashedPassword;
            Users_1.Users.create(userInfo)
                .then((users) => {
                let name = users.lastname;
                let msg = "L'utilisateur " + name + " a bien été ajouté.";
                res.json({ message: msg });
            })
                .catch((err) => {
                console_1.default.log(err);
                res.json({ message: "Insertion impossible." });
            });
        })
            .catch((err) => {
            console_1.default.log(err);
            res.json({ message: "Insertion impossible." });
        });
    }
    create(req, res) { }
    async read(req, res) { }
    update(req, res) { }
    delete(req, res) { }
}
exports.AuthenticateController = AuthenticateController;
