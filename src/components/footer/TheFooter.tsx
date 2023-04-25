import image1 from "../../assets/footer/abletonlive.png"
import image2 from "../../assets/footer/sonovente.png"
import image3 from "../../assets/footer/thomann.png"
import image4 from "../../assets/footer/woodbrass.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope, faInbox, faMobile } from '@fortawesome/free-solid-svg-icons'
import Style from "./footer.module.css";
export default function Footer (){

    return(

        <>

        <ul className={Style.footer}>
            <li><img src={image1} alt="" /></li>
            <li><img src={image2} alt="" /></li>
            <li><img src={image3} alt="" /></li>
            <li><img src={image4} alt="" /></li>
        </ul>

        <div>

                <ul>
                    <li>Mentions légales</li>
                    <li>Blog</li>
                    <li>Politique de conditionnalité</li>

                </ul>


                <div className="reseau">
                    <img className={Style.logo} src="/public/logo.png"/>


                    <ul className={Style.social}>

                        <li><FontAwesomeIcon icon={faInbox} /></li>
                        <li> <FontAwesomeIcon icon={faMobile}/></li>
                        

                    </ul>
                </div>


                <p>Contact</p>
        </div>
        
        </>

    )


}