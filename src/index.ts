require('dotenv').config();

import cors from 'cors';
import express from 'express';
import { generateToken } from './authenticate/jwt';
import {PORT} from './config/constants';
import { router } from './routes/recipe/Recipes';
import { autenticateRouter } from './routes/auth/authenticateRouter'
import { ingredientsRouter } from './routes/ingredients'

const app = express();
const allowedOrigins = ['http://localhost:8000'];
const options : cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(express.json());

app.get('/recipe/show/:id',router);
app.post('/recipe/add',router);
app.put('/recipe/edit/:id',router);
app.post('/signin',autenticateRouter);
app.post('/login',autenticateRouter);
app.get('/ingredients/show/:id',ingredientsRouter);
app.post('/ingredients/add',ingredientsRouter);
app.post('/ingredients/edit/:id',ingredientsRouter);
if(process.env.NODE_ENV !== 'production'){
    console.log('le token JWT: ', generateToken("aubin", "aub.heurtault@gmail.com","admin"));
}
app.listen(PORT, ()=> {
    console.log(`Server  is listening on port ${PORT}`)
});

