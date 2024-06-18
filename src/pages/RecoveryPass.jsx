import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../backend/FireBseconfig";
import { useEffect, useState } from "react";
import { titlePage } from "../helpers/titlePage";

const RecoveryPass = () => {
  const [mail, setMail] = useState("");

  const handlePasswordReset = () => {
    const email = mail;
    sendPasswordResetEmail(auth, email);
    alert("Codigo enviado");
  };
  const handleChange = (e) => {
    setMail(e.target.value);
  };
  useEffect(() => {
    titlePage("recoverypass");
  }, []);

  return (
    <>
      <h2 className="mt-5">Recuperar Contraseña</h2>
      <input
        type="email"
        id="email"
        placeholder="Ingresa tu correo electrónico"
        onChange={handleChange}
      />
      <button onClick={handlePasswordReset}>Enviar</button>
    </>
  );
};
a;
export default RecoveryPass;
