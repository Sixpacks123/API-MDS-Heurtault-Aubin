"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const Recipes_1 = require("./routes/recipe/Recipes");
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:800'];
const options = {
    origin: allowedOrigins
};
app.use(express_1.default.json());
app.get('/recipe/show/:id', Recipes_1.router);
app.listen(constants_1.PORT, () => {
    console.log(`Server  is listening on port ${constants_1.PORT}`);
});
