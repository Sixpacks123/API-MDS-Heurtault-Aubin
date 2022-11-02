"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientsRouter = void 0;
const express_1 = __importDefault(require("express"));
const IngredientsControllers_1 = require("../controllers/IngredientsControllers");
const Auth = __importStar(require("../middleware/authenticate"));
const ingredientsControllers = new IngredientsControllers_1.IngredientsControllers();
exports.ingredientsRouter = express_1.default.Router({
    strict: true,
});
exports.ingredientsRouter.route('/ingredients/show/:id').get(Auth.authorize(['admin']), ingredientsControllers.read);
exports.ingredientsRouter.route('/ingredients/add').post(Auth.authorize(['admin']), ingredientsControllers.create);
exports.ingredientsRouter.route('/ingredients/edit/:id').put(Auth.authorize(['admin']), ingredientsControllers.update);
