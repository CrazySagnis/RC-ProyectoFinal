import React from "react";
import "../css/FooterC.css"
import twitter from "../assets/img/twitter.jpg"
import instagram from "../assets/img/instagram.jpg"
import facebook from "../assets/img/facebook.jpg"
import codigoQR from "../assets/img/qr-code.png"
import logoFullMarket from "../assets/img/logo Full Market.jpg"

const FooterC = () => {
  return (
    <footer>   
    <div className="conteiner-fluid fixed-bottom">
      <div className="row">
            <div className="pie_izq col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-2 d-flex justify-content-around">
                 <a className="item_izq ms-4" href="./index.html"><img className="img-fluid" src={logoFullMarket} alt="logo full market" width="90" height="auto"/></a>
            </div>
        
            <div className="pie_cen col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-around pt-2">
                Seguinos en nuestas redes:  
                <a className="item_cen" href="https://twitter.com"><img src={twitter} alt="Logo twitter" width="auto" height="60" /></a>
                <a className="item_cen" href="https://facebook.com"><img src={facebook} alt="Logo facebook" width="auto" height="60" /></a>
                <a className="item_cen" href="https://instagram.com"><img src={instagram} alt="Logo instagram" width="auto"  height="60" /></a>
                <div>
                <a className="item_cen" href="https://www.fullmarket.com"><img src={codigoQR} alt="LogoFullMarket" width="auto"  height="60" />CodigoQR</a>
     
                </div>
             
            </div>

            <div class="pie_der col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-none d-sm-block pt-4"> 
                <h6 class=" d-flex justify-content-center
                 w-100">© Todos los derechos reservados</h6>
            </div>
      </div>
    </div>


    </footer>
  );
};

export default FooterC;
