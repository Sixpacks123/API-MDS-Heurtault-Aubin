"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const jwt_1 = require("./authenticate/jwt");
const constants_1 = require("./config/constants");
const Recipes_1 = require("./routes/recipe/Recipes");
const authenticateRouter_1 = require("./routes/auth/authenticateRouter");
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:8000'];
const options = {
    origin: allowedOrigins
};
app.use(express_1.default.json());
app.get('/recipe/show/:id', Recipes_1.router);
app.post('/recipe/add', Recipes_1.router);
app.put('/recipe/edit/:id', Recipes_1.router);
app.post('/signin', authenticateRouter_1.autenticateRouter);
app.post('/login', authenticateRouter_1.autenticateRouter);
if (process.env.NODE_ENV !== 'production') {
    console.log('le token JWT: ', (0, jwt_1.generateToken)("aubin", "aub.heurtault@gmail.com", "admin"));
}
app.listen(constants_1.PORT, () => {
    console.log(`Server  is listening on port ${constants_1.PORT}`);
});
