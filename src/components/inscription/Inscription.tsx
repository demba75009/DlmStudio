import Style from "./Inscription.module.css";
import { useState } from 'react'

export default function Inscription(){

    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ErrorEmail, setErrorEmail] = useState('')
    const [ErrorPassword, setErrorPassword] = useState('')

 
    const submitSignup = (event:FocusEvent) =>{

        const user = {

            Username,
            Email,
            Password
        }

        if (user.Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ) {
        
         setErrorEmail("") 
         
         if(user.Password.length < 8)
          setErrorPassword("Le mot de passe doit faire au moins 8 carractère !")
         else  
          setErrorPassword("") 


          fetch("localhost:3000").then(res=>console.log(res)
          )

        }

        else{

            setErrorEmail("Veuillez entrez un email correct !")            
        }
    } 


    return (

        <>
       <div className={`${Style.formu} w-full text-center  max-w-xs`}>
        <h1 className="my-20">Inscrivez - vous ! </h1>
        <form  className={` bg-white shadow-md rounded px-8 pt-6 my-10 pb-8 mb-4`}>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onKeyUp={(e)=>setUsername(e.currentTarget.value)} placeholder="Username"/>
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" onKeyUp={(e)=>setEmail(e.currentTarget.value)} placeholder="email"/>

            <p className="text-red-500">{ErrorEmail}</p>
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onKeyUp={(e)=>setPassword(e.currentTarget.value)} placeholder="******************"/>
            <p className="text-red-500">{ErrorPassword}</p>

            </div>
            <div className="flex items-center justify-between">
            <button onClick={submitSignup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign Up
            </button>
         
            </div>
        </form>
 
</div>
        
        </>

    )


}