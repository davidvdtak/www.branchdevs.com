import React, { useEffect } from "react";
import styles from './styles.module.scss';
import Tree from "../../components/svg/Tree";

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
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>NestJS</span>
            <span>NextJS</span>          
            <span>PHP</span> 
            <span>PHP Laravel</span>         
            <span>WordPress</span>                    
            <span>jQuery</span>          
            <span>CSS</span>
            <span>MySQL</span>
            <span>AJAX</span>
            <span>HTML5</span>          
            <span>CSS</span>
            <span>Javascript</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>APIs</span>          
            <span>JSON</span>                              
            <span>REST</span>          
            <span>Git</span>          
          </div>
        </div>
      </div>
      <div className={[styles.inner,'inner3'].join(' ')}>
        <div className="container pt-4">
          <h2>Selection of API integrations</h2>    
          <div className="badgeWrap"> 
            <span>Stripe</span>
            <span>PayPal</span>
            <span>Shopify</span>
            <span>Konnektive</span>
            <span>Sticky.io</span>
            <span>Everflow</span>
            <span>Facebook</span>
            <span>Calendly</span>
            <span>HubSpot</span>
            <span>TicketSocket</span>
            <span>Eventbrite</span>
            <span>Jira</span>
            <span>Slack</span>          
          </div>
        </div>   
      </div> 
    </div>    
  );            
};

export default Home;