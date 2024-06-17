import Image from 'react-bootstrap/Image';
import publicidad from "../assets/img/publicidad.webp"

function PublicidadC() {


  return (
    <div className="conteiner-fluid">
      <div className="row">
        <div className='d-none d-sm-block'>
        <Image className="ala img-fluid mt-5" src={publicidad} alt="logo full market" width="100%"/>
        </div>

      </div>
    </div>

);
}

export default PublicidadC;