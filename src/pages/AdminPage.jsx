import AdminUserPage from "../pages/AdminUserPage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AdminPage = () => {
  useEffect(() => {
    document.title = "Pagina Administrador";
  }, []);
  const handleClick = () => {
    ev.preventDefault();
  };
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || "";
  return (
    <>
      <h3>Vista Previa de la tabla de Usuarios</h3>
      <li>
        <Link to={"/admin/user"}>AdminUserPage</Link>
      </li>
    </>
  );
};

export default AdminPage;
