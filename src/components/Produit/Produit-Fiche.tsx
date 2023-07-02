 import Style from "./Produit-Fiche.module.css";

 import { ProductsContext } from "../../context/ProductsContext";
 import { useState, useEffect,useContext,useRef } from "react";
 import ProductsItem from "./ProductsItem";
 import {ProfilContext} from "../../context/ProfilContext"

 import { useNavigate } from 'react-router-dom';

 
 
 export default function ProduitFiche () {
   
   //  const [state, dispatch] = useReducer(ProductReducer, {Produits});
   
   const history = useNavigate()
   const Produits  = useContext(ProductsContext)
   
   const [Value, setValue] = useState("")
   
   const [Resultat, setResultat] = useState([])
   
   const TimeoutId = useRef(null);
     

    function Detail(id){


      history(`/Produit/${id}`)


    }

    function AddCart(id){



        const ProdCart = Produits.find(p=>p._id === id)  

        const cart = JSON.parse(localStorage.getItem('user'));
        cart.Cart.push(ProdCart)

        localStorage.setItem("user",JSON.stringify(cart))  


    }


     function Search(){


        
        const result = Value.charAt(0).toUpperCase() + Value.slice(1)
        

        if(result !== "")
        {
        clearTimeout(TimeoutId.current)

        TimeoutId.current = setTimeout(async () => {
        
          const ProductRequest = await  fetch(`http://localhost:3000/products/${result}`,{method:"GET"})
  
          const prod = await ProductRequest.json()
               
          setResultat(prod)
          
       
       
        }, 500);

      }

      else
      setResultat([])
     
      

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
                ProductDetailAction={()=>Detail(p._id)}
                AjouterCart={()=>AddCart(p._id)}

                />
      ))}
        
        </div>

     
        </>


    )




 }