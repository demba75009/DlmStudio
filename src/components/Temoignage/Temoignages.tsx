import { useState } from "react";
import TemoignagesModel from "../../interfaces/Temoignages-Interface";

export default function Temoignages() {
 
 const [Temoignages, setTemoignages] = useState([{id:1,nom:"Bertram ",prenom:"Jensen",text:"magnifique très bon produit "},{id:2,nom:"Arthur",prenom:"DUPONT",text:"Parfait rien a redire"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"},{id:3,nom:"Jeantrea",prenom:"David",text:"Super trés bonne livraision et arrivages"}])
 



  return (

    <div className="flex  -mx-20 my-10 overflow-auto "> {Temoignages.map((t)=> {


      return(
        <div className="px-10 max-w ms-5 bg-current py-4 my-10 rounded border-r border-b border-l border-slate-700">

          <div className=" flex font-bold text-white text-xl mb-2"><h1 className="me-2"> {t.nom} </h1> - <h1 className="ms-2">{t.prenom}</h1></div>
          <p className="text-white text-base">{t.text} </p>

    
      </div>
      )

    })} </div>
  
  );
}