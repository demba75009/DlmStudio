import express from 'express';
import usersRouter from './routes/users.routes.js';

import mongoose from './database/index.js';

const app = express();

mongoose
app.use(usersRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
