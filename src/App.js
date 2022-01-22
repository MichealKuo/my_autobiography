import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
