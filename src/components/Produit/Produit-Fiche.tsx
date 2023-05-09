 import Style from "./Produit-Fiche.module.css";
import Guitare from "../../assets/fiche-produit/guitar-g409efefcc_1920.jpg"
import Guitare2 from "../../assets/fiche-produit/imageGuitare2.jpg"
import GuitareProduit from "../../assets/fiche-produit/face.png";

import Produit1 from "../../assets/fiche-produit/produit.png"
import Produit2 from "../../assets/fiche-produit/produit2.png"
import Produit3 from "../../assets/fiche-produit/produit3.png"
import Produit4 from "../../assets/fiche-produit/produit4.png"
import { useState } from "react";




 export default function ProduitFiche () {

    const [Testimony,setTestimony] = useState([{name:"Patrick",contenu:"magnifique très bon produit"},{name:"Arthur", contenu:"Parfait rien a redire"},{name:"Benoit", contenu:"Je recommande a 100%"}])

    return(

        <>

        <section className={`lg:flex my-10 ${Style.Icard}`}> 

        <div className="Icard ">
            <h1 className={`${Style.Titre} `}>Icard</h1>
            <h2>à 2300 €</h2>

            <div className={` lg:flex`}>
                <button className={Style.buttonPreCommander}>Précommander</button>
                
                <button className={`${Style.buttonDecouvrir} border-solid border-2 border-black	 ms-2`}>Découvrir</button>
                
            </div>
        </div>

        <div className="Image w-1/3">
            <img src={Guitare} alt={Guitare}  />

        </div>


        </section>
        
        <div className={`${Style.banniere} lg:flex`}>
            <button className={Style.Started}>Get started</button>
            
            <div className={`${Style.annonce} `}> 

            <h1 className={Style.Titre}>Soirée de lancement iCord</h1>
            <h2>Concert de Ed Sheeran pour le lancement de la guitare iCord par DLM Studio</h2>

            </div>
        </div>

        <section>

            <div className="text-center my-10">
                    <h2>Une technologie hors du commun</h2>
                    <p>La guitare éléctro-accoustique coonécté à votre téléphone</p>                
            </div>

            <div className={`${Style.ImageSchema}`}>

                    <div className="">

                    <p className={Style.annot1}>DETECTEUR
                    <br></br>D'ACCORDAGE</p>
                    <p className={Style.annot2}>Capteur
                    <br></br>fréquence</p>
                    <p className={Style.annot3}>Capteur<br></br>vibrations</p>
                    <p className={Style.annot4}>Capteur<br></br>audio</p>

                 <img className={`${Style.ProduitImage}`} src={GuitareProduit} alt={GuitareProduit} />
                 </div>

            </div>

        </section>


        <section className={`${Style.banniere2} lg:flex my-20`}>
            <div>

             <h1 className={`${Style.Titre2} my-20 `}> L'excellence <br></br> en qualité sonore </h1>

            </div>

            <div className="Image w-1/3"><img src={Guitare2} alt={Guitare2} /></div>
        </section>

        <h2 className={Style.Titre2}> Un Design Epuré... </h2>

        <div className="grid grid-cols-2 gap-4 my-20">
            <div className={`${Style.Image} relative`}>
                <img src={Produit1} alt="image" className={` w-full h-full object-cover`}/>
                <div className={`${Style.calque} sm:hidden absolute inset-0 flex flex-col items-center justify-center text-white`}>
                    <h1 className="text-3xl font-bold">Manche en Acajou</h1>
                </div>
            </div>
            <div className={`${Style.Image} relative`}>
                <img src={Produit2}alt="image" className={` w-full h-full object-cover`}/>
                <div className={`${Style.calque} sm:hidden absolute inset-0 flex flex-col items-center justify-center text-white`}>
                    <h1 className="text-3xl font-bold">Table en épicéa massif sélectionné</h1>
                </div>
            </div>
            <div className={`${Style.Image} relative`}>
                <img src={Produit3}alt="image" className={` w-full h-full object-cover`}/>
                <div className={`${Style.calque} sm:hidden absolute inset-0 flex flex-col items-center justify-center text-white`}>
                    <h1 className="text-3xl font-bold">Coffre en Palissandre</h1>
                </div>
            </div>
            <div className={`${Style.Image} relative`}>
                <img src={Produit4}alt="image" className={` w-full h-full object-cover`}/>
                <div className={`${Style.calque} sm:hidden absolute inset-0 flex flex-col items-center justify-center text-white`}>
                    <h1 className="text-3xl font-bold">Des cordes adaptés</h1>
                </div>
            </div>
        </div>

        <h1 className={`my-20 ${Style.Titre}`}> Ils ont validé l'experience iCord</h1>

        <div className="flex"> 


        {Testimony.map(t=>{

                return(
                <div className=" bg-current ms-2 w-1/2 py-4 justify-center">

                    <div className=" font-bold text-white text-xl mb-2"><h1 className="me-2"> {t.name} </h1> </div>
                    <p className="text-white text-base">{t.contenu} </p>
                    </div>
                )

        })}
        </div>

        <button className={Style.buttonPreCommander}>Get started</button>

        </>


    )



 }