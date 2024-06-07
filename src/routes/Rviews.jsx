import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductPage from "../pages/ProductPage";




const Rviews = () => {
  return (
    <>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
       
      </Routes>
    </>
  );
};

export default Rviews;
