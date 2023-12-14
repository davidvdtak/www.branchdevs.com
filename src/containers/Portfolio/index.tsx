import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import Page from "../../components/ui/Page";

const Dashboard = () =>{

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME + " | Dashboard"        
  },[])

  return (
    <>
      <Header title="Dashboard"></Header>
      <Page>                
      </Page>
    </>
  );            
};

export default Dashboard;