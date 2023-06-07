import { useState } from "react"
import Style from "./ProductItemDetail.module.css"

export default function ProductsItemDetail({ProductList,ProductDetailAction}) {
    
  const [image, setimage] = useState(ProductList.Image[0])

    return(
    

        <div onClick={ProductDetailAction} className={`${Style.item} lg:flex lg:justify-beetween lg:aligns-center    ms-2 my-5  `}>

            <img className={` ${Style.img}  w-max  object-center`} src={image} alt={ProductList.Image[0]}/>


                

            <div> 
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <h1> 
                     {ProductList.Nom}

                  </h1>
                      <div className="px-6 pt-4 pb-2 ">
                      <span className="text-red-600">
                        
                        Prix: {ProductList.Prix} $ </span>
                    <span className="inline-block bg-red-900 rounded-full px-3 py-1 text-sm font-semibold text-white ms-5">Ajouter</span>
        
              </div>

                  


                  </div>
                <div >


                  <h2> Descriptif technique : </h2>

                  <p>
                  {ProductList.Description}
                  </p>
                  
                  </div>
              
              </div>
             
              <div className={Style.imgGrille}> 


                <img onClick={()=>setimage(ProductList.Image[0])} className={`  w-1/4`} src={ProductList.Image[0]} alt={ProductList.Image[0]}/>  
                
                { ProductList.Image.length > 1 ? (
                  
                  <>
                      <img onClick={()=>setimage(ProductList.Image[1])} className={`  w-1/4`} src={ProductList.Image[1]} alt={ProductList.Image[1]}/>    
                      
                          { ProductList.Image.length > 2 ? (

                            <> 
                            
                                <img onClick={()=>setimage(ProductList.Image[2])} className={`  w-1/4`} src={ProductList.Image[2]} alt={ProductList.Image[2]}/>     
                              {
                                  ProductList.Image.length > 3 ? (

                                    <img onClick={()=>setimage(ProductList.Image[3])} className={`  w-1/4`} src={ProductList.Image[3]} alt={ProductList.Image[3]}/>     


                                  ) :""


                              }
                            
                            </>


                          ) : ""


                          }
                      
                  </>
                  
                
                )
                
                :""



                }



            

              </div>
          </div>

           
      </div>
    )
    
    } 