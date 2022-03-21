import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CollectionPage from "./pages/CollectionPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./pages/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
