import TheHeader from "./TheHeader/TheHeader";
import HomeImage from "../assets/home/home-image.jpg"
import Style from "./Home.module.css"
import Temoignages from "./Temoignage/Temoignages";
function Home () {

    return(

        <>

       <TheHeader />

        <section className={`${Style.DLMStudio}
         lg:flex sm:text-center`}>

            <div className={Style.Parlez}>

                <h1>PARLER DE DLM <br></br> STUDIO</h1>
                <p className="sm:text-center">Home is behind, the world ahead and there are many paths to tread through shadows to the edge.</p>

                <button className={Style.GetStarted}>
                    Get Started
                </button>
                <button className={`${Style.TryNow} border-2 border-black`}>
                    Try Now
                </button>


            
            </div>

            <div className={`${Style.imageHome}`}> 
            <img  src={HomeImage} alt="/assets/home/home-image.jpg"  />

            </div>



        </section>

        <Temoignages />

        <article className={` lg:flex sm:text-center ${Style.Mokeup}`}>
            <div>
                <h1 className={Style.titleMokeup}>Suivez votre progression <br></br> avec l'app iCord</h1>
                <p>Home is behind, the world ahead and there are many paths to tread through shadows to the.</p>
            </div>
            <div>

                <button className={Style.Mobile}>Mobile</button>
                <button className={Style.Desktop}>Desktop</button>

            </div>
        </article>
        

        </>

    )



}


export default Home