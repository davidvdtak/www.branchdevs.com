import React, { useEffect } from "react";

import { useConfig } from "../../context/Config";
import Page from "../../components/Page";
import theme from  "../../theme";

const About = () =>{

  const config = useConfig(); 

  useEffect(() => {
    document.title = config.app.TITLE + " | About"        
  },[])

  return (    
    <Page>  
      <h1 className="display-1 text-center text-uppercase fw-bold"><span style={{color: theme.colors.primary}}>Branch</span><span style={{color: theme.colors.secondary}}>Devs</span></h1>      
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">        
        
      </div>                      
    </Page>    
  );            
};

export default About;