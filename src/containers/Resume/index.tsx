import React, { useEffect } from "react";

import { useConfig } from "../../context/Config";
import Page from "../../components/Page";

const Resume = () =>{

  const config = useConfig(); 

  useEffect(() => {
    document.title = config.app.TITLE + " | Resume"        
  },[config.app.TITLE])

  return (    
    <Page>  
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">        

        
      </div>                      
    </Page>    
  );            
};

export default Resume;