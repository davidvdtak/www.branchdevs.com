import React, { useEffect } from "react";

import { useConfig } from "../../context/Config";
import Page from "../../components/Page";

const Portfolio = () =>{

  const config = useConfig(); 

  useEffect(() => {
    document.title = config.app.TITLE + " | Portfolio"        
  },[config.app.TITLE])

  return (    
    <Page>  
      <div className="overflow-hidden">
        <div className="row g-4 mb-4">        
          <div className="col-lg-6 order-lg-0 bg-white"></div>
          <div className="col-lg-6 order-lg-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="row g-4 mb-4">        
          <div className="col-lg-6 order-lg-1 bg-white"></div>
          <div className="col-lg-6 order-lg-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="row g-4 mb-4">        
          <div className="col-lg-6 order-lg-0 bg-white"></div>
          <div className="col-lg-6 order-lg-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="row g-4 mb-4">        
          <div className="col-lg-6 order-lg-1 bg-white"></div>
          <div className="col-lg-6 order-lg-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>                      
      </div>
    </Page>    
  );            
};

export default Portfolio;