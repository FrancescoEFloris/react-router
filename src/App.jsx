import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutUs from "./components/AboutUs.jsx";
import OurProducts from "./components/OurProducts.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourproducts" element={<OurProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
