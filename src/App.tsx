import React, { forwardRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import "./global.module.scss";

// errors
//import ForbiddenPage from "./containers/Errors/403";
import NotFoundPage from "./containers/Errors/404";
//import ServerErrorPage from "./containers/Errors/500";

// layouts
import BaseLayout  from "./layouts/BaseLayout";

// misc
import RenderCompleted  from "./hooks/RenderCompleted";

// containers
import Home from "./containers/Home";

const RoutesWithAnimation = forwardRef(() => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>    
          <Route index element={<Home />} />
          {/* 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>      
    </AnimatePresence>
  )  
})

function App() {
  const isMounted = RenderCompleted();

  return (
    <>
      {isMounted && (
        <BrowserRouter>
          <Routes>
            <Route element={<BaseLayout />}>
              <Route path="*" element={(
                <RoutesWithAnimation />                
              )} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
