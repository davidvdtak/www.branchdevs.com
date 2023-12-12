import React, { useContext, useEffect } from "react";
import Page from "../../components/Page";
import { useConfig } from "../../context/Config";

const Home = () =>{

  const config = useConfig(); 
  
  useEffect(() => {
    document.title = config.app.TITLE + " | Dashboard"        
  },[])

  return (    
    <Page>  
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <img src={`${config.app.PUBLIC_URL}/images/branchdevs-logo.png`} />
      </div>                      
    </Page>    
  );            
};

export default Home;