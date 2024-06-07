import { BrowserRouter } from "react-router-dom";
import RViews from "./routes/Rviews";
import FooterC from "./components/FooterC";
import"./App.css";
const App = () => {
  
     return(
      <>
      <BrowserRouter>
          <RViews />
      </BrowserRouter>
      <FooterC />
      </>
     );
 
};

export default App;
