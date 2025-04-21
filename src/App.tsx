import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,

  matchPath,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import { assets } from "./assets/Assets";

import Home from "./pages/Home/Home";
import AboutUs from "./components/features/AboutUs";

const App: React.FC = () => {
 

  // Paths without Navbar/Footer
  const hideNavbarPaths = ['/about'];
 



  // Helper function to match paths
  const shouldHideComponent = (paths: string[]) =>
    paths.some((path) => matchPath(path, location.pathname));

  return (
    <div className="app">
      <ToastContainer position="top-center" autoClose={3000} />
      {/* Conditionally render Navbar */}
      {!shouldHideComponent(hideNavbarPaths) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        

      </Routes>

      <Footer />
    </div>
  );
};

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
