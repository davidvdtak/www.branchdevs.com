import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Page from "../../components/Page";
import { useConfig } from "../../context/Config";
 

const Home = () =>{

  const config = useConfig(); 
  
  console.log(config);

  useEffect(() => {
    document.title = config.app.TITLE + " | Dashboard"        
  },[])

  return (
    <>
      <Page>                        
      </Page>
    </>
  );            
};

export default Home;