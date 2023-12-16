import React, { ComponentType } from "react";
import { motion } from  "framer-motion";

interface TransitionProps {
  // Define any props that your original component might accept
}

const transition = (OgComponent: ComponentType<TransitionProps>) => {
  return (props: TransitionProps) => (
    <>
      <OgComponent {...props} />
      <motion.div 
        className="slide-in"
        initial={{scaleY : 1}}
        animate={{scaleY : 0}}
        exit={{scaleY : 1}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
      />
      <motion.div 
        className="slide-out"
        initial={{scaleY : 1}}
        animate={{scaleY : 0}}
        exit={{scaleY : 1}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
      />
    </>
  )
}

export default transition;