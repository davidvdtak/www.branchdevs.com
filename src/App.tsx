import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// errors
import ForbiddenPage from "./containers/Errors/403";
import NotFoundPage from "./containers/Errors/404";
//import ServerErrorPage from "./containers/Errors/500";

// layouts
import BaseLayout  from "./layouts/BaseLayout";

// misc
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RenderCompleted  from "./hooks/RenderCompleted";

// containers
import Home from "./containers/Home";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Resume from "./containers/Resume";


function App() {
    
  const isMounted = RenderCompleted();

  return (
    <>          
      {isMounted && (
        <BrowserRouter basename={'/dev'}>
          <Routes>
            <Route element={<BaseLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
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
