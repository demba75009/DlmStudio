import express from 'express';
import usersRouter from './routes/users.routes.js';
import bodyParser from 'body-parser';

import mongoose from './database/index.js';

const app = express();
app.use(bodyParser.json());

mongoose

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  // Add any other headers or options as needed
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});
app.use(usersRouter);



app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
