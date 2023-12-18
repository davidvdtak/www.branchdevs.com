import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageWrapper, PageInner, PageTransition } from "./styled";
import theme from "../../theme";

interface Props {
  children: React.ReactNode;
}

const Page = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the overlay after a certain duration (e.g., 2 seconds)
    const timeoutId = setTimeout(() => {
      setIsOverlayVisible(false);
    }, 1750);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <PageWrapper theme={theme}>
        <PageInner>{children}</PageInner>
      </PageWrapper>
      {isOverlayVisible &&
        <PageTransition 
          ref={ref}
          initial={{ display: "block", opacity: 1, width: "100%", height: '100%'}}
          animate={{ opacity: 0, transition: { duration: 1.5, delay: .25 }}}
          theme={theme}
        />    
      }
      <PageTransition 
          ref={ref}
          initial={{ display: "none", opacity: 0}}
          exit={{ 
            display: "block",
            opacity: 1,
            width: ["0%", "50%", "30%", "40%", "100%"],
            height: ["0%", "50%", "30%", "40%", "100%"],
            top: ["50%","25%", "35%","30%","0%"],
            left: ["50%","25%", "35%","30%","0%"],
            borderRadius: ["100%", "0%"],
            rotate: [0, 0, 270, 270, 0],
            transition: { duration: 1.5 } 
          }}
          theme={theme}
        /> 
    </>
  );
});

export default Page;
