import './App.css'
import Home from './components/Home'
import Footer from './components/footer/TheFooter'
import TheHeader from "./components/TheHeader/TheHeader";
import Connexion from "./components/connexion/Connexion.tsx"
import Inscription from "./components/inscription/Inscription.tsx"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProduitFiche from './components/Produit/Produit-Fiche';
import Profil from './components/profil/Profil.tsx';
import AddProduct from './components/AddProduct/AddProduct.tsx';

function App() {

  
 
  return (
    <>
   <Router>

        <TheHeader />

        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/addProduct" element={<AddProduct />} />
          <Route  path="/connexion" element={<Connexion />} />
          <Route  path="/inscription" element={<Inscription />} />
          <Route  path="/fiche-produit" element={<ProduitFiche />} />
          <Route  path="/profil" element={<Profil />} />
   

        </Routes>


        <Footer/>
   
       
    </Router>
    </>
  )
}

export default App
