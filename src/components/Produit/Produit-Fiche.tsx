 import Style from "./Produit-Fiche.module.css";

 import { ProductsContext } from "../../context/ProductsContext";
 import { useState, useEffect,useContext } from "react";
 import ProductsItem from "./ProductsItem";

 


 export default function ProduitFiche () {

    const Produits  = useContext(ProductsContext)

    

    return(

        <>

        <h1 className="text-center my-20">Liste Produit</h1>

        <section className=" text-white p-4 bg-yellow-700 flex justify-between items-center">

          <h2> Une recherche : </h2>

          <input className="h-1/2 w-1/2" type="text" placeholder="Recherchez" />


          <button className={Style.buttonPreCommander}>Recherchez</button>
        </section>

        <div className="my-20 lg:flex">

      {Produits.map(p=>(

                <ProductsItem 
                key={p._id}
                ProductList={p}

                />
      ))}
        
        </div>

     
        </>


    )




 }