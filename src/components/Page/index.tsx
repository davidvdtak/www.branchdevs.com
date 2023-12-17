import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { PageWrapper, PageInner } from "./styled";
import theme from "../../theme";

interface Props {
  children: React.ReactNode;
}

const Page = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <PageWrapper
      ref={ref}
      initial={{ backgroundColor: "#222", x: "-100%" }}
      animate={{ backgroundColor: theme.colors.base_200, x: 0, transition: { duration: 1 } }}
      exit={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#222", x: "100%", transition: { duration: 1 } }}
      theme={theme}
    >
      <PageInner>{children}</PageInner>
    </PageWrapper>
  );
});

export default Page;
