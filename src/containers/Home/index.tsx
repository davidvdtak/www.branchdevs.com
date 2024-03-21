import React, { useEffect } from "react";
import styles from './styles.module.scss';
import Tree from "../../components/SVG/Tree";
import Skills from "./skills";
import Apis from "./apis";


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
          <Skills />
        </div>
      </div>
      <div className={[styles.inner,'inner3'].join(' ')}>
        <div className="container pt-4">
          <h2>Selection of API integrations</h2>    
          <Apis />
        </div>   
      </div> 
      <div className={[styles.inner].join(' ')}>
        <div className="container pt-4">
          <h2>Portfolio Frontend</h2>    
        </div>   
      </div> 
      <div className={[styles.inner,'inner2'].join(' ')}>
        <div className="container pt-4">
          <h2>Portfolio Backend</h2>    
        </div>   
      </div> 
    </div>    
  );            
};

export default Home;