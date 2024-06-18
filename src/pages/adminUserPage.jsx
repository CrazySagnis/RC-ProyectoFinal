import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

const AdminUserPage = () => {
  const [show, setShow] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const usersLocalStorage = JSON.parse(localStorage.getItem("users")) || [];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = () => {
    setDataUser({ ...dataUser, [ev.target.name]: ev.target.value });
  };

  const handleClick = () => {
    setShow(true);
    setDataUser(user);
  };

  const handleSaveData = () => {
    ev.preventDefault();
    const userIndex = usersLocalStorage.findIndex(
      (user) => user.id === dataUser.id
    );

    if (dataUser.role !== "admin" && dataUser.role !== "user")
      return alert("Rol no soportado");

    usersLocalStorage[userIndex] = dataUser;

    localStorage.setItem("users", JSON.stringify(usersLocalStorage));
    setShow(false);
    location.reload();
  };
  const handleDeleteUser = (ev, userId) => {
    const confirmDelUser = confirm(
      "Estas seguro que quieres eliminar a este usuario?"
    );
    if (confirmDelUser) {
      const newArrayUser = usersLocalStorage.filter(user, user.id !== userId);

      localStorage.setItem("users", JSON.stringify(newArrayUser));
      location.reload();
    }

    return (
      <>
        <div className=" d-flex justify-content-center">
          <Table striped bordered hover className="w-50 text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>role</th>
                <th>Editar/Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {usersLocalStorage.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>
                  <td>{user.role === "user" ? "Usuario" : "Administrador"}</td>
                  <td className="d-flex">
                    <Button
                      className="me-3"
                      variant="outline-warning"
                      onClick={(ev) => handleClick(ev, user)}>
                      Editar
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Editar: {dataUser.userName}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicUser">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter email"
                              value={dataUser.userName}
                              onChange={handleChange}
                              name="userName"
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Password"
                              value={
                                dataUser.role === "user"
                                  ? "Usuario"
                                  : "Administrador"
                              }
                              onChange={handleChange}
                              name="role"
                            />
                          </Form.Group>

                          <Form.Group className=" d-flex justify-content-center">
                            <Button
                              variant="success"
                              type="submit"
                              className="w-85"
                              onClick={handleSaveData}>
                              Guardar Datos
                            </Button>
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                    </Modal>
                    <button
                      className={
                        user.role === "admin"
                          ? "d-none"
                          : "btn btn-outline-danger me-2"
                      }
                      onClick={(ev) => handleDeleteUser(ev, user.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  };
};
export default AdminUserPage;
