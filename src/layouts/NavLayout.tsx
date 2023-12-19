import React, { useEffect, useState } from "react";
import theme from "../theme";
import { useNavigate, useLocation } from "react-router-dom";
import { NavBackground, NavWrapper } from "./styled";
import { motion } from "framer-motion"
import { MenuToggle } from "src/components/MenuToggle";
import MenuLink from "src/components/MenuLink";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {      
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


const NavLayout = () =>{
  const [isOpen, setIsOpen] = useState(false)

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
  },[location.pathname])

  return ( 
    <NavWrapper theme={theme}>
      <MenuToggle toggle={() => setIsOpen(!isOpen)} active={isOpen} />
      <NavBackground animate={isOpen ? "open" : "closed"} variants={sidebar} theme={theme}>      
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={NavOptions}
        >
          <motion.ul variants={NavUlOptions}>
            <motion.li variants={NavLiOptions}>
              <MenuLink link="/" label="Home" />
            </motion.li>  
            <motion.li variants={NavLiOptions}>
              <MenuLink link="/about" label="About" />
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