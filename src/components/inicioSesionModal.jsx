import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { json } from "express/lib/response";

const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formLogin, setFormLogin] = userState({
    userName: "",
    pass: "",
  });

  const [error, setError] = userState({
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

    const userExist = usersLocalStorage.find(
      (user) => user.userName === userName
    );

    if (!userExist) {
      return alert("Usuario y/o contraseña no coinciden. USUARIO");
    }

    if (pass === userExist.pass) {
      const userIndex = usersLocalStorage.findIndex(
        (user) => user.id === userExist.id
      );
      userExist.login = true;

      usersLocalStorage[userIndex] = userExist;
      localStorage.setItem("users", JSON.stringify(usersLocalStorage));
      localStorage.setItem("userLogin", JSON.stringify(userExist));

      if (userExist.role === "admin") {
        location.href = "home-admin";
      } else {
        location.href = "home-user";
      }
    } else {
      return alert("Usuario y/o contraseña no coinciden. CONTRASEÑA ");
    }
  };
  usseEffect(() => {
    document.title = "Página Administrador: Usuarios";
  }, []);

  const inicioSesionModal = () => {
    return (
      <>
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}>
          <Button variant="primary" onClick={handleShow}>
            Iniciar Sesion
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Inicio de Sesion</Modal.Title>
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
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="pass"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button
                style=" width: 100%; background-color: #55A630"
                onClick={handleClick}>
                {" "}
                Iniciar Sesion{" "}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  };
};

export default inicioSesisoin;
