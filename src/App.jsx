import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Construction from "./components/Construction";
import ElevationDesign from "./components/Elevation Design";
import FloorPlan from "./components/Floor Plan";
import InteriorDesign from "./components/InteriorDesign";
import ConstructionProjects from "./components/ConstructionProjects";
import ElevationDesignProjects from "./components/ElevationDesignProjects";
import FloorPlanProjects from "./components/FloorPlanProjects";
import InteriorDesignProjects from "./components/InteriorDesignProjects";
import ScrollToTop from "./components/ScrollToTop";
import Maincontent from "./components/Maincontent";
import Company from "./components/Company";
import Fotter from "./components/Fotter";
import ScrollingBanner from "./components/SrollingBanner";
import Videos from "./components/Videos";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="bh-white">
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
         <Route
            path="/"
            element={
              <>
                  <HeroSection />    <Maincontent />  <Project />   <Company />
                  <Videos />  <Contact /> <Fotter/>
              </>
            }
          /> 
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="services/construction" element={<Construction />} />
          <Route path="services/elevation" element={<ElevationDesign />} />
          <Route path="services/floor" element={<FloorPlan />} />
          <Route path="services/interior" element={<InteriorDesign />} />
          <Route path="Login" element={<Login/>}/>
          <Route path="Signup" element={<Signup/>}/>
       {/*<Route
            path="projects/construction"
            element={<ConstructionProjects />}
          />
          <Route
            path="projects/elevation"
            element={<ElevationDesignProjects />}
          />
          <Route path="projects/floor" element={<FloorPlanProjects />} />
          <Route
            path="projects/interior"
            element={<InteriorDesignProjects />}
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
