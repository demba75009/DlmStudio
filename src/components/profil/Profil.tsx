import { useState, useEffect,useContext } from "react";

import {ProfilContext} from "../../context/ProfilContext"
import Avatar from "../../assets/Avatar/avatar.png"


export default function Profil (){

    const user2 = useContext(ProfilContext)
    

    // conversion json en objet
    const [user, setUser] = useState(JSON.parse(user2))


    

    





    return(

        <div className="my-20  ">

           <div className="flex flex-col justify-center text-center"> 
                <div className="flex justify-center items-center ">
                  <img className="w-30" src={Avatar} alt={Avatar} />
                </div>

                <h1 className="my-10"> Nom d'utilisateur: {user.Username} </h1>
                <h2> Votre Email : {user.Email} </h2>
            
            </div> 
            <div className=" my-20 flex justify-evenly"> 

            <h1> Votre Panier: </h1>
             {
                user.Cart.map(c=>(c))


             }

            </div>
        </div>
    )

}