 import Style from "./Produit-Fiche.module.css";

 import { ProductsContext } from "../../context/ProductsContext";
 import { useState, useEffect,useContext } from "react";
 import ProductsItem from "./ProductsItem";

 


 export default function ProduitFiche () {

    const Produits  = useContext(ProductsContext)

    

    return(

        <>


      {Produits.map(p=>(

                <div className="my-20">
                <ProductsItem 
                key={p._id}
                ProductList={p}

                />
                </div>
      ))}
     
     
        </>


    )




 }