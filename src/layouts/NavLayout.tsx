import React, { useEffect, useState } from "react";
import theme from "../theme";
import { useLocation } from "react-router-dom";
import { NavBackground, NavWrapper } from "./styled";
import { motion } from "framer-motion"
import { MenuToggle } from "src/components/MenuToggle";
import MenuLink from "src/components/MenuLink";

const NavLayout = () =>{
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 32px 27px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(20px at 32px 27px)",
      transition: {      
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const NavOptions = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const NavUlOptions = {
    open: {transition: { staggerChildren: 0.07, delayChildren: 0.2 }},
    closed: {transition: { staggerChildren: 0.05, staggerDirection: -1 }}
  }

  const NavLiOptions = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }

  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
    setTimeout(()=> {setIsLoaded(true)}, 150);
  },[location.pathname])

  return ( 
    <NavWrapper    
     customStyles={{display: isLoaded ? 'block' : 'none'}}
    >
      <MenuToggle toggle={() => setIsOpen(!isOpen)} active={isOpen} />
      <NavBackground 
        animate={isOpen ? "open" : "closed"} 
        variants={sidebar} 
      >    
        <span className="d-block h3 text-center text-uppercase fw-800">
          <span style={{color: theme.colors.primary}}>Branch</span>
          <span style={{color: theme.colors.secondary}}>Devs</span>
        </span> 
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={NavOptions}
        >
          <motion.ul variants={NavUlOptions}>
            <motion.li variants={NavLiOptions}>
              <MenuLink link="/" label="Home" />
            </motion.li>  
            <motion.li variants={NavLiOptions}>
              <MenuLink link="/portfolio" label="Portfolio" />
            </motion.li>  
            <motion.li variants={NavLiOptions}>
              <MenuLink link="/resume" label="Resume" />            
            </motion.li>        
          </motion.ul>        
        </motion.nav >
      </NavBackground>
    </NavWrapper> 
  )
}
export default NavLayout;