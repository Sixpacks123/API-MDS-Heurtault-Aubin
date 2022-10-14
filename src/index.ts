require('dotenv').config();

import cors from 'cors';
import express from 'express';
import { generateToken } from './authenticate/jwt';
import {PORT} from './config/constants';
import { router } from './routes/recipe/Recipes';


const app = express();
const allowedOrigins = ['http://localhost:800'];
const options : cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(express.json());

app.get('/recipe/show/:id',router);

if(process.env.NODE_ENV !== 'production'){
    console.log('le token JWT: ', generateToken());
}
app.listen(PORT, ()=> {
    console.log(`Server  is listening on port ${PORT}`)
});

