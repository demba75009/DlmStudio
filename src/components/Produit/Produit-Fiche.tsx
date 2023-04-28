 import Style from "./Produit-Fiche.module.css";
import Guitare from "../../assets/fiche-produit/guitar-g409efefcc_1920.jpg"

import GuitareProduit from "../../assets/fiche-produit/face.png";

 export default function ProduitFiche () {


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


        
        </>


    )



 }