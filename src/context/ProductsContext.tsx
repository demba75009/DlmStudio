import {createContext, useState}  from "react"



let products = []

async function getProduct(){

    const ProductRequest = await  fetch("http://localhost:3000/products",{method:"GET"})
  
    const prod = await ProductRequest.json()
    
    products = prod
    

    return products
    
    
      }

       

     const Products = await getProduct()
      
     

     
     

export const  ProductsContext = createContext(Products) 