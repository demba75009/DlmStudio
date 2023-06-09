
import { useState, useEffect,useContext,useReducer } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartList () {
    const cart = useContext(CartContext)

    const [Cart, setCart] = useState(cart)

    console.log(Cart);
    

    return(


        

          Cart.length > 0 ? (Cart.map(c=>(

                <div className="my-20 flex justify-evenly items-center">
                
                <img className="w-1/5" src={c.Image[0]} />
                <h1> {c.Nom} </h1>
                <h2 className="text-red-500"> {c.Prix} $ </h2>
                
                </div>
            )) 

          ) : <h1 className="my-20 text-center"> Votre Panier est vide </h1>
        

    )

}