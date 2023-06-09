import {createContext}  from "react"

const UserCartJson = localStorage.getItem("user");
const CartObjet =  JSON.parse(UserCartJson);

let Cart
if(CartObjet !== null)
 Cart = CartObjet.Cart 




export const  CartContext = createContext(Cart)