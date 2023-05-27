import express from 'express';
import ProductController from '../controller/products.controller.js';

const router = express.Router();

router.get('/products', (req, res) => {
  // Your code here
  
  new ProductController().get(req,res)
});
router.post('/products/add', (req, res) => {
  // Your code here

  
  new ProductController().post(req,res)
});




export default router;
