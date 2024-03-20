import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from './styles.module.scss';

const BaseLayout = () => {

  return (    
    <>
      <Helmet>
        <link rel="icon" type="image/png" sizes="192x192"  href={`${process.env.REACT_APP_BASEURL}/images/android-icon-192x192.png`} />        
        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.REACT_APP_BASEURL}/images/apple-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.REACT_APP_BASEURL}/images/favicon-32x32.png`} />    
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.REACT_APP_BASEURL}/images/favicon-16x16.png`} />
      </Helmet>
      <div className={styles.wrapper}>          
        <div className={styles.inner}>          
          <Outlet/>        
        </div>
      </div>
    </>
  )
};

export default BaseLayout;