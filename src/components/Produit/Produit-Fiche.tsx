 import Style from "./Produit-Fiche.module.css";

 import { ProductsContext } from "../../context/ProductsContext";
 import { useState, useEffect,useContext } from "react";
 import ProductsItem from "./ProductsItem";

 


 export default function ProduitFiche () {

    const Produits  = useContext(ProductsContext)

    const [Value, setValue] = useState("")

    const [Resultat, setResultat] = useState([])

    
    async function Search(){

        

        const result = Value.charAt(0).toUpperCase() + Value.slice(1)

        console.log(result);
        

        const ProductRequest = await  fetch(`http://localhost:3000/products/${result}`,{method:"GET"})
  
        const prod = await ProductRequest.json()
        
        
        setResultat(prod)
        
      

    }

    return(

        <>

        <h1 className="text-center my-20">Liste Produit</h1>

        <section className="  p-4 bg-yellow-700 flex justify-between items-center">

          <h2 className="text-white"> Une recherche : </h2>

        <div>
          <input  onKeyDown={(e)=>{setValue(e.currentTarget.value) ; Search()}} className="text-current h-1/2 w-1/2" type="text" placeholder="Recherchez" />
            {
            
              Resultat.length >0 ? (

            Resultat.map(r=>(
              <>

              
              <div className="bg-white "> 
  
                <h1 > {r.Nom.slice(0,20)}... </h1>

              </div>
              </>
            ))
            ):""}

          </div>

          <button className={`${Style.buttonPreCommander} text-white`}>Recherchez</button>
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