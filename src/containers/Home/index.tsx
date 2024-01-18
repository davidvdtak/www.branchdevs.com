import React, { useEffect } from "react";
import theme from "../../theme";

import { useConfig } from "../../context/Config";
import Page from "../../components/Page";
import SVG from "../../components/SVG";
import Tree from "../../components/SVG/Tree";

const Home = () => {

  const config = useConfig(); 

  useEffect(() => {
    document.title = config.app.TITLE + " | Home"        
  },[config.app.TITLE])

  return (    
    <Page>  
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">     
        <h1 className="display-1 text-center text-uppercase fw-bold">
          <span style={{color: theme.colors.primary}}>Branch</span>
          <span style={{color: theme.colors.secondary}}>Devs</span>
        </h1>   
        <SVG styles={{width : "400px", maxWidth : "100%", "& path:nth-child(0)" : {animation : "fillAnimation2 4s linear infinite;"}, "& path:nth-child(1)" : {animation : "fillAnimation2 4s linear infinite;"}, "& path:nth-child(2)" : {animation : "fillAnimation3 4s linear infinite;"}, "& path:nth-child(3)" : {animation : "fillAnimation4 4s linear infinite;"}}}>
          <Tree />
        </SVG>        
        <p>a David van der Tak professional portfolio site</p>
      </div>                            
    </Page>    
  );            
};

export default Home;