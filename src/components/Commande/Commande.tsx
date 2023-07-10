
import { useState, useEffect,useContext,useReducer } from "react";
import { CartContext } from "../../context/CartContext";

export default function Commande () {
    let cart = useContext(CartContext || null)

    const [Cart, setCart] = useState(cart || [])
    const [Adresse, setAdresse] = useState("")
    const [Ville, setVille] = useState("")
    const [CodePostal, setCodePostal] = useState("")

    

    function Commandez(e:event){

        e.preventDefault()

        const Livraison = {

            Adresse,
            Ville,
            CodePostal

        }

        console.log(Livraison);
        
    }


     function SupprimerPanier (id){



        const newCart =  Cart.filter((t) => t.idCart !== id)

        const cartNew = JSON.parse(localStorage.getItem('user'));


        cartNew.Cart = newCart

        localStorage.setItem("user",JSON.stringify(newCart))  
        

       setCart(newCart)
        


    }
    

    return(


        
        <>
        
            <h1 className="my-20"> Votre Commande :  </h1>
                <>
            <table className="my-40 container mx-auto border-separate border-collapse border border-current	-400" >

             <thead>
              <tr>
                            <th className="border border-current	-300" scope="row">img</th>
                            <th className="border border-current	-300" scope="row">Name</th>
                            <th className="border border-current	-300">Prix</th>
                            <th className="border border-current	-300">quantity</th>
                          
              </tr>
              </thead>                    

         {Cart.map(c=>(

                   <tbody className="border border-current	-300">

                        <tr>

                            <td className="border border-current	-300" ><img className="w-12" src={c.Image[0]} /></td>
                            <td className="border border-current	-300">{c.Nom}</td>
                            <td className="border border-current	-300" >{c.Prix} $</td>
                            <td className="border border-current	-300" >{c.Stock}</td>
                           
                        </tr>

                   </tbody>       

            )) }
            </table>  

              <h2> Livraison (sous 2j ouvré) </h2>

             <form className={` bg-white shadow-md rounded px-8 pt-6 my-10 pb-8 mb-4`}>


                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Adresse">
                        Adresse
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Adresse" type="text"  name="Adresse"  placeholder="Adresse"  onKeyUp={(e)=>{setAdresse(e.currentTarget.value)}}/>
                    </div>


                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Ville">
                        Ville
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Ville" type="text"  name="Ville" placeholder="Ville" onKeyUp={(e)=>{setVille(e.currentTarget.value)}}/>

                  
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nom">
                        Code postal
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Codepostal" type="text" name="Codepostal"  placeholder="Code postal" onKeyUp={(e)=>{setCodePostal(e.currentTarget.value)}}/>

                    {/* <p className="text-red-500">{ErrorPrix}</p> */}
                    </div>

            

                    

                <button onClick={Commandez}  className="GetStarted mr-4">Passez au paiement</button>
            
            </form>
            </>  

          
         

            </>

    )

}