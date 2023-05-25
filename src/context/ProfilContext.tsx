import {createContext}  from "react"

const UserJson = localStorage.getItem("user");
console.log(UserJson);



export const  ProfilContext = createContext(UserJson)