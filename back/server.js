import express from 'express';
import usersRouter from './routes/users.routes.js';
import productsRouter from './routes/products.routes.js';
import bodyParser from 'body-parser';
import flash from "req-flash";
import mongoose from './database/index.js';
import session from 'express-session';
const app = express();
app.use(bodyParser.json());

import stripe from 'stripe';
import { stripeSecretKey } from './config/config.js';

const stripeInstance = stripe(stripeSecretKey);

console.log(stripeInstance);

mongoose

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

app.use(session({
  secret: "dffdsfd", resave:false, saveUninitialized:false, 
  cookie: {maxAge: 3600000} 
}));

app.use(flash());
app.use(usersRouter);
app.use(productsRouter);



app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
