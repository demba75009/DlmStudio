import {createContext}  from "react"

const UserJson = localStorage.getItem("user");
const User = JSON.parse(UserJson);


export const  ProfilContext = createContext(User)