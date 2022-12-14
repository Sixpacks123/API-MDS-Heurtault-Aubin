"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticateRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../../controllers/UserController");
const userController = new UserController_1.UserController();
exports.autenticateRouter = express_1.default.Router({
    strict: true,
});
exports.autenticateRouter.route('/signin').post(userController.signin);
exports.autenticateRouter.route('/login').post(userController.login);
