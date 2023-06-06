import Style from "./ProductItemDetail.module.css"

export default function ProductsItemDetail({ProductList,ProductDetailAction}) {
    
    return(
    
        <div onClick={ProductDetailAction} className={`${Style.item} lg:flex lg:justify-beetween lg:aligns-center    ms-2 my-5  `}>

            <img className={` ${Style.img}  w-max  object-center`} src={ProductList.Image[0]} alt={ProductList.Image[0]}/>
           

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
             
          </div>

           
      </div>
    )
    
    } 