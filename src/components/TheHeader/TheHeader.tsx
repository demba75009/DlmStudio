import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
 
import Style from "./TheHeader.module.css"
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
 


  const getToken =  localStorage.getItem('token');

  
  


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col text-black gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        
        className="p-1 font-normal"
      >
        <NavLink to="/" onClick={() => setOpenNav(!openNav)}
 className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        
        className="p-1 font-normal"
      >
        <NavLink to="/fiche-produit" onClick={() => setOpenNav(!openNav)}
 className="flex items-center">
          Fiche Produit
        </NavLink>
      </Typography>
      {getToken ? (

        <Typography
        as="li"
        variant="small"

        className="p-1 font-normal"
        >

        <NavLink onClick={()=>localStorage.removeItem('token')} to="/connexion" className="flex items-center">
          Deconnexion
        </NavLink>
        </Typography> 
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