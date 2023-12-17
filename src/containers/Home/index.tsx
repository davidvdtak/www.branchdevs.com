import React, { useEffect } from "react";

import { useConfig } from "../../context/Config";
import Page from "../../components/Page";
import SVG from "../../components/SVG";
import Tree from "../../components/SVG/Tree";
import theme from  "../../theme";

const Home = () => {

  const config = useConfig(); 

  useEffect(() => {
    document.title = config.app.TITLE + " | Home"        
  },[])

  return (    
    <Page>  
      <h1 className="display-1 text-center text-uppercase fw-bold"><span style={{color: theme.colors.primary}}>Branch</span><span style={{color: theme.colors.secondary}}>Devs</span></h1>
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">        
        <SVG styles={{width : "300px", maxWidth : "100%", "& path:nth-child(1)" : {animationDelay: ".5s"}, "& path:nth-child(2)" : {animationDelay: "1s"}, "& path:nth-child(3)" : {animationDelay: "1.5s"}}} path={{animation : "fillAnimation 4s linear infinite;"}}>
          <Tree />
        </SVG>        
        <p>a David van der Tak professional portfolio site</p>
      </div>                            
    </Page>    
  );            
};

export default Home;