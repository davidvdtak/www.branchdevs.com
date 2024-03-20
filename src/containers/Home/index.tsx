import React, { useEffect } from "react";
import styles from './styles.module.scss';
import Tree from "../../components/SVG/Tree";
import { motion } from "framer-motion";

const Home = () => {


  useEffect(() => {
    document.title = process.env.REACT_APP_NAME + " | Home"        
  },[])

  return (    
    <div className={styles.wrapper}>  
      <div className={styles.inner}>
        <div>            
          <h1 className="heading">
            <span className="text-primary">Branch</span>
            <span className="text-secondary">Devs</span>
          </h1>   
        </div>
        <div>            
          <div className="svgChange">
            <Tree />
          </div>    
          <p>a<br />David van der Tak<br />professional portfolio site</p>    
        </div>          
      </div>
      <div className={[styles.inner,'inner2'].join(' ')}>
        <div className="container pb-4">
          <h2 className="mb-4 text-center">Skills</h2>    
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
        </div>
      </div>
      <div className={[styles.inner,'inner3'].join(' ')}>
        <div className="container pt-4">
          <h2>Selection of API integrations</h2>    
          <div className="badgeWrap"> 
            <Badge>Stripe</Badge>
            <Badge>PayPal</Badge>
            <Badge>Shopify</Badge>
            <Badge>Konnektive</Badge>
            <Badge>Sticky.io</Badge>
            <Badge>Everflow</Badge>
            <Badge>Facebook</Badge>
            <Badge>Calendly</Badge>
            <Badge>HubSpot</Badge>
            <Badge>TicketSocket</Badge>
            <Badge>Eventbrite</Badge>
            <Badge>Jira</Badge>
            <Badge>Slack</Badge>          
          </div>
        </div>   
      </div> 
    </div>    
  );            
};

export default Home;



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