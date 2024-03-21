import React from "react";
import { motion } from "framer-motion";

const Badge = ({ children } :  {children: any}) => {
  return (
    <motion.span
      className="badge"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}      
    </motion.span>
  );
}

const Skills = () => {
  return (
    <div className="badgeWrap">          
      <Badge>Node.js</Badge>
      <Badge>TypeScript</Badge>
      <Badge>React</Badge>
      <Badge>NestJS</Badge>
      <Badge>NextJS</Badge>          
      <Badge>PHP</Badge> 
      <Badge>PHP Laravel</Badge>         
      <Badge>WordPress</Badge>                    
      <Badge>jQuery</Badge>          
      <Badge>CSS</Badge>
      <Badge>MySQL</Badge>
      <Badge>AJAX</Badge>
      <Badge>HTML5</Badge>          
      <Badge>CSS</Badge>
      <Badge>Javascript</Badge>
      <Badge>Bootstrap</Badge>
      <Badge>JavaScript</Badge>
      <Badge>APIs</Badge>          
      <Badge>JSON</Badge>                              
      <Badge>REST</Badge>          
      <Badge>Git</Badge>          
    </div>
  )
};



export default Skills;