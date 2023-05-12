import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  // Your code here
  console.log("hello");
});

export default router;
