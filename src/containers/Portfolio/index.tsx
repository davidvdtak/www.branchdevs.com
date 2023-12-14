import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useConfig } from "../../context/Config";
import Page from "../../components/Page";
import BasicButton from "../../components/BasicButton";
import theme from  "../../theme";

const Portfolio = () =>{

  const config = useConfig(); 
  const navigate = useNavigate();

  useEffect(() => {
    document.title = config.app.TITLE + " | Portfolio"        
  },[])

  return (    
    <Page>  
      <h1 className="display-1 text-center text-uppercase fw-bold"><span style={{color: theme.colors.primary}}>Branch</span><span style={{color: theme.colors.secondary}}>Devs</span></h1>
      <div className="d-flex gap-4 mt-4 justify-content-center align-items-center">
        <BasicButton onClick={() => (navigate('/'))} color={theme.colors.primary} borderColor={theme.colors.primary}>Home</BasicButton>          
        <BasicButton onClick={() => (navigate('/about'))} color={theme.colors.primary} borderColor={theme.colors.primary}>About</BasicButton>          
        <BasicButton onClick={() => (navigate('/resume'))} color={theme.colors.primary} borderColor={theme.colors.primary}>Resume</BasicButton>          
      </div>
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">        

        
      </div>                      
    </Page>    
  );            
};

export default Portfolio;