import { BrowserRouter } from "react-router-dom";
import RViews from "./routes/Rviews";
import FooterC from "./components/FooterC";
import "./App.css";
import BarraDeNavegacion from "../src/components/Navbar";
import ListaDeProductos from "./components/BaseDatosFalsa/ListaProductos";
const App = () => {
  return (
    <>
      <BarraDeNavegacion />
      <BrowserRouter>
        <ListaDeProductos />
        <RViews />
      </BrowserRouter>
      <FooterC />
    </>
  );
};

export default App;
