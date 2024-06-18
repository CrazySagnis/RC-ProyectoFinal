import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const RegisterModal1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formRegister, setFormRegister] = useState({});
  const [error, setError] = useState({
    allInputs: "",
    userError: "",
    passError: "",
    rpassError: "",
  });

  const usersLocalStorage = JSON.parse(localStorage.getItem("users")) || [];

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const { userName, pass, Rpass } = formRegister;
    let newError = {};

    if (!userName && !pass && !Rpass) {
      newError = { ...error, allInputs: "errorAllinputs" };
      setError(newError);
    } else {
      setError({});
      if (!userName) {
        newError = { ...error, userError: "errorUser" };
      }
      if (!pass) {
        newError = { ...error, passError: "errorPass" };
      }
      if (!Rpass) {
        newError = { ...error, rpassError: "errorRpass" };
      }
      if (Object.keys(newError).length) {
        setError(newError);
      }
      if (userName && pass && Rpass) {
        let newUser;
        if (pass === Rpass) {
          if (usersLocalStorage.length) {
            const userExist = usersLocalStorage.find(
              (user) => user.userName === userName
            );

            if (userExist) {
              alert("El usuario ya existe");
              return;
            }

            const idUser =
              usersLocalStorage[usersLocalStorage.length - 1].id + 1;
            newUser = {
              id: idUser,
              userName,
              pass,
              role: "user",
              login: false,
              delete: false,
              fav: [],
              cart: [],
            };
          } else {
            newUser = {
              id: 1,
              userName,
              pass,
              role: "user",
              login: false,
              delete: false,
              fav: [],
              cart: [],
            };
          }
          usersLocalStorage.push(newUser);
          localStorage.setItem("users", JSON.stringify(usersLocalStorage));
          alert("Usuario creado con éxito");
        } else {
          alert("Las contraseñas no coinciden");
        }
      }
    }
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}>
      <Button variant="primary" onClick={handleShow}>
        Registrarse
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label>Usuario </Form.Label>
              <Form.Control
                className={
                  error.allInputs === "errorAllinputs" ||
                  error.userError === "errorUser"
                    ? "form-control is-invalid"
                    : "form-control"
                }
                type="text"
                placeholder="Enter User"
                onChange={handleChange} // Corregido
                name="userName" // Corregido
              />
              {error.userError === "errorUser" ||
                (error.allInputs === "errorAllinputs" && (
                  <p>Campo Usuario Vacio</p>
                ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className={
                  error.allInputs === "errorAllinputs" ||
                  error.passError === "errorPass"
                    ? "form-control is-invalid"
                    : "form-control"
                }
                type="password"
                placeholder="Password"
                onChange={handleChange} // Corregido
                name="pass" // Corregido
              />
              {error.passError === "errorPass" ||
                (error.allInputs === "errorAllinputs" && (
                  <p>Campo Contraseña Vacio</p>
                ))}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRPassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                className={
                  error.allInputs === "errorAllinputs" ||
                  error.rpassError === "errorRpass"
                    ? "form-control is-invalid"
                    : "form-control"
                }
                type="password"
                placeholder="Password"
                onChange={handleChange} // Corregido
                name="Rpass" // Corregido
              />
              {error.rpassError === "errorRpass" ||
                (error.allInputs === "errorAllinputs" && (
                  <p>Campo Repetir Contraseña Vacio</p>
                ))}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{ width: "100%", backgroundColor: "#55A630" }} // Corregido
            onClick={handleClick}>
            Registrarse
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterModal1;
