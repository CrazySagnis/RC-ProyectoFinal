import adminUsersPage from "../pages/adminUserPage";

const AdminPage = () => {
  useEffect(() => {
    document.title = "PÃ¡gina Administrador";
  }, []);
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || "";
  return (
    <>
      <h3>Vista Previa de la tabla de Usuarios</h3>
      <link to={"/admin/users"}>
        <adminUsersPage />
      </link>
    </>
  );
};

export default AdminPage;
