// src/components/Rviews.js
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductPage from "../pages/ProductPage";
import RegisterModal1 from "../components/RegistroModal";
import AdminPage from "../pages/AdminPage";
import AdminUserPage from "../pages/AdminUserPage";
import InicioSesionModal from "../components/InicioSesionModal";
import RecoveryPass from "../pages/RecoveryPass";

const Rviews = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterModal1 />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/inicio-sesion" element={<InicioSesionModal />} />
      <Route path="/home-admin" element={<AdminPage />} />
      <Route path="/admin/user" element={<AdminUserPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/recovery" element={<RecoveryPass />} />
    </Routes>
  );
};

export default Rviews;
