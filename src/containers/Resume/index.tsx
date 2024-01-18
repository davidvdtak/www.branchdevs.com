import React, { useEffect } from "react";

import Page from "../../components/Page";

const Resume = () =>{

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME + " | Resume"        
  },[])

  return (    
    <Page>  
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">        

        
      </div>                      
    </Page>    
  );            
};

export default Resume;