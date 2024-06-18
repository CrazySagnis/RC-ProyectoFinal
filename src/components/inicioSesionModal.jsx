import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../backend/FireBseconfig";

const InicioSesionModal = () => {
  const LoginModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formLogin, setFormLogin] = useState({
      userName: "",
      pass: "",
    });

    const [error, setError] = useState({
      errorInputs: "",
      errorUser: "",
      errorPass: "",
      errorRpass: "",
    });

    const usersLocalStorage = JSON.parse(localStorage.getItem("users")) || [];

    const handleChange = (ev) => {
      setFormLogin({ ...formLogin, [ev.target.name]: ev.target.value });
    };

    const handleClick = (ev) => {
      ev.preventDefault();
      const { userName, pass } = formLogin;

      // const userExist = usersLocalStorage.find(
      //   (user) => user.userName === userName
      // );

      // if (!userExist) {
      //   return alert("Usuario y/o contraseña no coinciden. USUARIO");
      // }

      // if (pass === userExist.pass) {
      //   const userIndex = usersLocalStorage.findIndex(
      //     (user) => user.id === userExist.id
      //   );
      //   userExist.login = true;

      //   usersLocalStorage[userIndex] = userExist;
      //   localStorage.setItem("users", JSON.stringify(usersLocalStorage));
      //   localStorage.setItem("userLogin", JSON.stringify(userExist));

      //   if (userExist.role === "admin") {
      //     window.location.href = "home-admin";
      //   } else {
      //     window.location.href = "home-user";
      //   }
      // } else {
      //   return alert("Usuario y/o contraseña no coinciden. CONTRASEÑA ");
      // }
      signInWithEmailAndPassword(auth, userName, pass)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          alert("Usuario Logeado");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Usuario/Contraseña incorrecto");
        });
    };

    const handlePasswordReset = () => {
      const email = prompt("Por favor ingresa tu email");
      sendPasswordResetEmail(auth, email);
      alert("Codigo enviado");
    };

    useEffect(() => {
      document.title = "Página Administrador: Usuarios";
    }, []);

    return (
      <>
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}>
          <Button variant="primary" onClick={handleShow}>
            Iniciar Sesión
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Inicio de Sesión</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUser">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter User"
                    onChange={handleChange}
                    name="userName"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="pass"
                  />
                </Form.Group>
              </Form>
              <li>
                <a href="/recovery">Olvidde mi Contraseña</a>
              </li>
            </Modal.Body>

            <Modal.Footer>
              <Button
                style={{ width: "100%", backgroundColor: "#55A630" }}
                onClick={handleClick}>
                Iniciar Sesión
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  };

  return <LoginModal />;
};

export default InicioSesionModal;
