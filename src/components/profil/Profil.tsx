import { useState, useEffect,useContext } from "react";

import {ProfilContext} from "../../context/ProfilContext"
import Avatar from "../../assets/Avatar/avatar.png"


export default function Profil (){

    const user2 = useContext(ProfilContext)
    
    const [user, setUser] = useState(user2)



    





    return(

        <div className="my-20  ">

           <div className="flex flex-col justify-center text-center"> 
                <div className="flex justify-center items-center ">
                  <img className="w-30" src={Avatar} alt={Avatar} />
                </div>

                <h1 className="my-10"> {user.Username} </h1>
                <h2> {user.Email} </h2>
            
            </div> 
            <div className=" my-20 flex justify-evenly"> 

            <h1> Vos Achats </h1>
            <h1 className="ms-2"> Votre Progression </h1>

            </div>
        </div>
    )

}