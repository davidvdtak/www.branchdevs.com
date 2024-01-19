import React, { useEffect, useState } from "react";
import { PageWrapper, PageInnerStyle, PageTransition } from "./styled";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

const Page = (({ children, styles }: Props) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const exits = [
    { 
      display: "block",
      opacity: [1,1],
      width: ["0%", "55%", "25%", "40%", "100%"],
      paddingTop: ["0%", "55%", "25%", "40%", "0%"],      
      height: ["0%", "0%", "0%", "0%", "100%"],
      borderRadius: ["100%", "100%", "100%", "100%", "0%"],
      transition: { duration: 1.5 } 
    },
    { 
      display: "block",
      opacity: [1,1],
      width: ["0%", "30%", "40%", "50%", "100%"],
      paddingTop: ["0%", "15%", "20%", "35%", "100%"],      
      height: ["0%", "0%", "0%", "0%", "100%"],
      borderRadius: ["100%", "0%"],
      rotate: [0, 0, 270, 270, 0],
      transition: { duration: 1.5 } 
    }
  ]
  const eIndex = Math.floor(Math.random() * exits.length);


  useEffect(() => {
    // Set a timeout to hide the overlay after a certain duration (e.g., 2 seconds)
    const timeoutId = setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1750);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <PageWrapper
        customStyles={styles}
      >
        {children}
      </PageWrapper>
      {isOverlayVisible &&
        <PageTransition           
          initial={{ display: "block", opacity: 1, top: 0, left: 0, right: 0, bottom: 0 }}
          animate={{ opacity: 0, transition: { duration: .5 }}}
        />    
      }
      <PageTransition         
        initial={{ justifyContent: "center", alignItems: "center", top: 0, left: 0, right: 0, bottom: 0, background: "transparent"}}
        exit={{ display: "flex"}}
      >
        <PageTransition exit={exits[eIndex]} /> 
      </PageTransition>
    </>
  );
});

export default Page;


export const PageInner = ({ children, styles }: Props) => (
  <PageInnerStyle
    customStyles={styles}
  >
    {children}
  </PageInnerStyle>
)