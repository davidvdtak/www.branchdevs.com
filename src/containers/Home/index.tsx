import React, { useEffect } from "react";
import theme from "../../theme";

import Page, { PageInner } from "../../components/Page";
import SVG from "../../components/SVG";
import Tree from "../../components/SVG/Tree";

const Home = () => {


  useEffect(() => {
    document.title = process.env.REACT_APP_NAME + " | Home"        
  },[])

  return (    
    <Page>  
      <PageInner>
        <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">     
          <h1 className="display-1 text-center text-uppercase fw-800">
            <span style={{color: theme.colors.primary}}>Branch</span>
            <span style={{color: theme.colors.secondary}}>Devs</span>
          </h1>   
          <SVG styles={{width : "450px", maxWidth : "100%", "& path:nth-child(0)" : {animation : "fillAnimation2 2s linear infinite;"}, "& path:nth-child(1)" : {animation : "fillAnimation2 2s linear infinite;"}, "& path:nth-child(2)" : {animation : "fillAnimation3 2s linear infinite;"}, "& path:nth-child(3)" : {animation : "fillAnimation4 2s linear infinite;"}}}>
            <Tree />
          </SVG>        
          <p className="text-center">a<br />David van der Tak<br />professional portfolio site</p>
        </div>                            
      </PageInner>
    </Page>    
  );            
};

export default Home;