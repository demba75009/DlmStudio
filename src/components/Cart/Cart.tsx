
import { useState, useEffect,useContext,useReducer } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartList () {
    let cart = useContext(CartContext || null)

    const [Cart, setCart] = useState(cart || [])

    console.log(Cart);
    

     function SupprimerPanier (id){



        const newCart =  Cart.filter((t) => t.idCart !== id)

        const cartNew = JSON.parse(localStorage.getItem('user'));


        cartNew.Cart = newCart

        localStorage.setItem("user",JSON.stringify(newCart))  
        

       setCart(newCart)
        


    }
    

    return(


        
        <>
        
            <h1 className="my-20"> Votre Panier :  </h1>

            <table className="my-40 container mx-auto border-separate border-collapse border border-current	-400" >

             <thead>
              <tr>
                            <th className="border border-current	-300" scope="row">img</th>
                            <th className="border border-current	-300" scope="row">Name</th>
                            <th className="border border-current	-300">Prix</th>
                            <th className="border border-current	-300">quantity</th>
                            <th>Action</th>
              </tr>
              </thead>                    

         { Cart.length > 0 ? (Cart.map(c=>(

                   <tbody className="border border-current	-300">

                        <tr>

                            <td className="border border-current	-300" ><img className="w-12" src={c.Image[0]} /></td>
                            <td className="border border-current	-300">{c.Nom}</td>
                            <td className="border border-current	-300" >{c.Prix} $</td>
                            <td className="border border-current	-300" >{c.Stock}</td>
                            <td onClick={()=>SupprimerPanier(c.idCart)} className="border border-current	-300 text-red-500" >Supprimmer</td>
                        </tr>

                   </tbody>       
            )) 


          ) : <h1 className="my-20 text-center"> Votre Panier est vide </h1>
         }
        </table>    

            </>

    )

}