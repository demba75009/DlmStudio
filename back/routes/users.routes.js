import express from 'express';
import UserController from '../controller/users.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
  // Your code here
  
  new UserController().get(req,res)
});
router.post('/users-add', (req, res) => {
  // Your code here

  
  new UserController().post(req,res)
});

export default router;
