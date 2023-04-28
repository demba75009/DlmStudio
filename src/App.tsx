import './App.css'
import Home from './components/Home'
import Footer from './components/footer/TheFooter'
import TheHeader from "./components/TheHeader/TheHeader";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProduitFiche from './components/Produit/Produit-Fiche';

function App() {

  return (
    <>
   <Router>

        <TheHeader />

        <Routes>
  <Route  path="/" element={<Home />} />
  <Route  path="/fiche-produit" element={<ProduitFiche />} />
   

  </Routes>


        <Footer/>
   
       
    </Router>
    </>
  )
}

export default App
