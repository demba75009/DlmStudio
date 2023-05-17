import Style from "./Connexion.module.css";
import { useState } from 'react';
import fetch from "isomorphic-fetch";
import { useNavigate } from 'react-router-dom';

export default function Connexion(){


    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ErrorEmail, setErrorEmail] = useState('')
    const [ErrorPassword, setErrorPassword] = useState('')
    const [ErrorIncorrect, setErrorIncorrect] = useState('')

    const history = useNavigate(); // Utilisé pour naviguer vers une autre route

 
    const submitSignup  = async (event:FocusEvent) =>{

        event.preventDefault()
        const user = {

            
            Email,
            Password
        }

        

        if (user.Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ) {
        
         setErrorEmail("") 
         
         if(user.Password.length < 8)
          setErrorPassword("Le mot de passe doit faire au moins 8 carractère !")
         else  
          setErrorPassword("") 
          try {


          const response = await  fetch("http://localhost:3000/connexion", { method: 'POST',   
          headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
       })

       const responseData = await response.json();

       const user25 = JSON.stringify(responseData.userAuth)
       console.log(user25);
       
       const token = responseData.token;

       localStorage.setItem('token', token);
       localStorage.setItem('user', user25);



       if(responseData !== "error")
        history('/');
       else 
        throw Error

     } catch (error) {
       console.log(error);
       setErrorIncorrect("mot de passe ou email incorrect")
     }
 
        }

        else{

            setErrorEmail("Veuillez entrez un email correct !")            
        }
    } 


    return (

        <>
       <div className={`${Style.formu} w-full text-center  max-w-xs`}>


        <h1 className="my-20">Connectez - vous ! </h1>
        <p className="my-10 text-red-500">{ErrorIncorrect}</p>

        <form onSubmit={submitSignup} className={` bg-white shadow-md rounded px-8 pt-6 my-10 pb-8 mb-4`}>


         
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="Email" onKeyUp={(e)=>setEmail(e.currentTarget.value)}  placeholder="email"/>

            <p className="text-red-500">{ErrorEmail}</p>
            </div>


            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onKeyUp={(e)=>setPassword(e.currentTarget.value)} name="Password" placeholder="******************"/>

            </div>
            <div className="flex items-center justify-between">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
            </button>
         
            </div>
        </form>
 
</div>
        
        </>

    )


}