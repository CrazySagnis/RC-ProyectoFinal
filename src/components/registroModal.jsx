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
        if (pass === Rpass) {
          if (usersLocalStorage.length) {
            const userExist = usersLocalStorage.find(
              (user) => user.userName === userName
            );

            const idUser =
              usersLocalStorage[usersLocalStorage.length - 1].id + 1;
            const newUser = {
              id: idUser,
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
          alert("Usuario creado con exito");
        } else {
          const newUser = {
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
      }
    }
  };
};

return (
  <div className="modal show" style={{ display: "block", position: "initial" }}>
    <Button variant="primary" onClick={handleShow}>
      Registrarse
    </Button>
    <Modal show={show} onHide={handleShow}>
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
              onChangue={handleChange}
              name="UserName"
            />
            {error.userError === "errorUser" ||
              (error.allInputs === "errorAllinputs" && (
                <p>Campo Usuario Vacio</p>
              ))}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contrase単a</Form.Label>
            <Form.Control
              className={
                error.allInputs === "errorAllinputs" ||
                error.passError === "errorPass"
                  ? "form-control is-invalid"
                  : "form-control"
              }
              type="password"
              placeholder="Password"
              onChangue={handleChange}
              name="Pass"
            />
            {error.passError === "errorPass" ||
              (error.allInputs === "errorAllinputs" && (
                <p>Campo Constrase単a Vacio</p>
              ))}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRPassword">
            <Form.Label> Repetir Contrase単a</Form.Label>
            <Form.Control
              className={
                error.allInputs === "errorAllinputs" ||
                error.rpassError === "errorRpass"
                  ? "form-control is-invalid"
                  : "form-control"
              }
              type="password"
              placeholder="Password"
              onChangue={handleChange}
              name="Rpass"
            />
            {error.rpassError === "errorRpass" ||
              (error.allInputs === "errorAllinputs" && (
                <p>Campo Recuperar Constrase単a Vacio</p>
              ))}
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          style=" width: 100%; background-color: #55A630"
          onClick={handleClick}>
          {""}
          Registrarse
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default RegisterModal1;