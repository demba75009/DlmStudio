import Style from "./ProducItem.module.css"

export default function ProductsItem({ProductList}) {
    
    return(
    
        <div className={`${Style.item} text-center   ms-2 my-5  bg-slate-700`}>
        <img className={` ${Style.img}  w-max h-1/2 object-center`} src={ProductList.Image[0]} alt={ProductList.Image[0]}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{ProductList.Nom}</div>
         
        </div>
        <div className="px-6 pt-4 pb-2 h-60">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Regardez</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ajouter</span>
   
        </div>
      </div>
    )
    
    }