
import Product from "../model/Product.model.js";

 class ProductController{


   async get(req,res) {

       const Products = await Product.find({}).exec()

       

       return res.json(Products)

    }

      

}


export default  ProductController