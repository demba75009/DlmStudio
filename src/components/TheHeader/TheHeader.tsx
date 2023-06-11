import { useState, useEffect,useContext } from "react";
import { NavLink } from "react-router-dom";

import Avatar from "../../assets/Avatar/avatar.png"

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
 
import Style from "./TheHeader.module.css"

import { useNavigate } from "react-router-dom";

import {ProfilContext} from "../../context/ProfilContext"
import { CartContext } from "../../context/CartContext";

export default function TheHeader() {
  const [openNav, setOpenNav] = useState(false);

  const cart = useContext(CartContext)
  
  
 
  const [user, setUser] = useState({Username:"",Email:""})

  const navigate = useNavigate()

 

  function profile(){

    setOpenNav(!openNav)
    navigate("/profil")


  }

  



  const user2 = useContext(ProfilContext)



  useEffect(() => {
    setUser( user2 )
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, [user]);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col text-black gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        
        className="p-1 font-normal"
      >
        <NavLink to="/" onClick={() => setOpenNav(false)}
 className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        
        className="p-1 font-normal"
      >
        <NavLink to="/fiche-produit" onClick={() => setOpenNav(false)}
 className="flex items-center">
          Fiche Produit
        </NavLink>
      </Typography>


<Typography>
  <NavLink onClick={() => setOpenNav(false)} to="/cart">
      <div className="relative w-6 h-6">
      <span className="absolute top-0 left-0 w-full h-full">
        {/* Ajoutez ici votre icône de panier, par exemple : */}
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4m-9-7v-8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8" />
          <circle cx="10" cy="18" r="1" />
          <circle cx="18" cy="18" r="1" />
        </svg>
      </span>
      {cart && cart.length > 0 && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
          { cart.length}
        </span>
      )}
    </div>
    </NavLink>
    </Typography>
      {user ? (

        <>

        <div onClick={profile}  className={`${Style.Avatar} flex flex-col`}>
          
          <img className="w-12" src={Avatar} alt={Avatar} />
          <h1>{user.Username} </h1>

        
        </div>
        <Typography
        as="li"
        variant="small"

        className="p-1 font-normal"
        >

        <NavLink onClick={()=>{localStorage.removeItem('token')
      localStorage.removeItem('user')
      
      }} to="/connexion" className="flex items-center">
          Deconnexion
        </NavLink>
        </Typography> 
        </>
          ): (
            <>
            <Typography
            as="li"
            variant="small"
            
            className="p-1 font-normal"
          >
           
            <NavLink to="/connexion" className="flex items-center">
              Connexion
            </NavLink>
          </Typography>
    
          <Typography
            as="li"
            variant="small"
            
            className="p-1 font-normal"
          >
            <NavLink to="/inscription" className="flex items-center">
              inscription
            </NavLink>
          </Typography>
          </>
          )
          }
     
    
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-12 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-dark-900">
        <NavLink
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <img className={Style.logo} src="/public/logo.png"/>
        </NavLink>
        <div className="hidden lg:block">{navList}</div>
      
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-black hover:bg-transparent  focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
         
        </div>
      </MobileNav>
    </Navbar>
  );
}