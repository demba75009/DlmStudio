
import Product from "../model/Product.model.js";

 class ProductController{


   async get(req,res) {

       const Products = await Product.find({}).exec()

       console.log(Products);

       return res.json(Products)

    }
   async post(req,res) {

    const Produit = req.body

    const Products = new Product(Produit)

    Products.save()

       

       return res.json(Products)

    }

      

}


export default  ProductController