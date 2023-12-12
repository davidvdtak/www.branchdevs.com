import { BrowserRouter, Route, Routes } from "react-router-dom";

// containers
import ForbiddenPage from "./containers/Errors/403";
import NotFoundPage from "./containers/Errors/404";
//import ServerErrorPage from "./containers/Errors/500";


import Home from "./containers/Home";

// layouts
import BaseLayout  from "./layouts/BaseLayout";

// misc
import RenderCompleted  from "./hooks/RenderCompleted";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";


function App() {
    
  const isMounted = RenderCompleted();

  return (
    <>          
      {isMounted && (
        <BrowserRouter>
          <Routes>
            <Route element={<BaseLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/forbidden" element={<ForbiddenPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}      
    </>
  );
  
}

export default App;
