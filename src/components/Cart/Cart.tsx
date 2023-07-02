
import { useState, useEffect,useContext,useReducer } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartList () {
    const cart = useContext(CartContext || null)

    const [Cart, setCart] = useState(cart || [])

    

    return(


        
        <>
        
            <h1 className="my-20"> Votre Panier :  </h1>

         { Cart.length > 0 ? (Cart.map(c=>(

              

            
                <table className="my-40" >
                        <tr>
                            <th scope="row">img</th>
                            <th scope="row">Name</th>
                            <th>Prix</th>
                            <th>quantity</th>
                        </tr>
                    
   
                    <tr >

                        <td ><img className="w-12" src={c.Image[0]} /></td>
                        <td >{c.Nom}</td>
                        <td >{c.Prix} $</td>
                        <td >{c.Stock}</td>
                    </tr>
                </table>    
            )) 


          ) : <h1 className="my-20 text-center"> Votre Panier est vide </h1>
         }
            </>

    )

}