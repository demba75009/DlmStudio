import {createContext}  from "react"

const UserCartJson = localStorage.getItem("user");
 let CartObjet

 console.log(UserCartJson);
 

if(UserCartJson !== "undefined")
 CartObjet =  JSON.parse(UserCartJson) ;

 else
  CartObjet = []



let Cart
if(CartObjet !== "undefined")
 Cart = CartObjet.Cart || []

else
 Cart === null




export const  CartContext = createContext(Cart)