import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import AboutUs from "./components/pages/AboutUs.jsx";
import OurProducts from "./components/pages/OurProducts.jsx";
import ThisProduct from "./components/pages/ThisProduct.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourproducts" element={<OurProducts />} />
          <Route path="/ourproducts/:thisproductid" element={<ThisProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
