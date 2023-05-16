import './App.css'
import Home from './components/Home'
import Footer from './components/footer/TheFooter'
import TheHeader from "./components/TheHeader/TheHeader";
import Connexion from "./components/connexion/Connexion.tsx"
import Inscription from "./components/inscription/Inscription.tsx"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProduitFiche from './components/Produit/Produit-Fiche';

function App() {
  const getToken =  localStorage.getItem('token');

  
 
  return (
    <>
   <Router>

        <TheHeader />

        <Routes>
  <Route  path="/" element={<Home />} />
  <Route  path="/connexion" element={<Connexion />} />
  <Route  path="/inscription" element={<Inscription />} />
  <Route  path="/fiche-produit" element={<ProduitFiche />} />
   

  </Routes>


        <Footer/>
   
       
    </Router>
    </>
  )
}

export default App
