require('dotenv').config();

import cors from 'cors';
import express from 'express';
import {PORT} from './config/constants';
import { router } from './routes/recipe/Recipes';


const app = express();
const allowedOrigins = ['http://localhost:800'];
const options : cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(express.json());

app.get('/recipe/show/:id',router);

app.listen(PORT, ()=> {
    console.log(`Server  is listening on port ${PORT}`)
});