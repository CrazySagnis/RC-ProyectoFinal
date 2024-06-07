import { useEffect, useState } from 'react'
import {useApi} from "../helpers/useApi"
import {useParams} from "react-router-dom";
import ImageC from "../components/ImageC"
import "../css/ProductPage.css";
import {titlePage} from "../helpers/titlePage"
import CardC from '../components/CardC';


const ProductPage = () => {
  const { id } = useParams();
  const [product , setProduct] = useState({});


const getOneProduct = async () =>{
const data = await useApi(id);
setProduct(data);
};

const addProdFav = async () => {
  token;
  if (!token) {
    alert(
      "Tenes que iniciar sesion para añadir este producto a tus favoritos"
    );
    navigate("/sign-in");
  }

  const productoAgregadoFavorito = await clienteAxios.post(
    `/favs/${id}`,
    {},
    configHeader
  );

  if (productoAgregadoFavorito.status === 200) {
    alert(`${productoAgregadoFavorito.data.msg}`);
  }
};

const addProdCart = async () => {
  token;
  if (!token) {
    alert("Tenes que iniciar sesion para añadir este producto a tu Carrito");
    navigate("/sign-in");
  }

  const productoAgregadoCarrito = await clienteAxios.post(
    `/carts/${id}`,
    {},
    configHeader
  );

  if (productoAgregadoCarrito.status === 200) {
    alert(`${productoAgregadoCarrito.data.msg}`);
  }
};

useEffect(() =>{
  getOneProduct();
  titlePage("product")
},[]);

return (
  <>
    <div className='d-flex justify-content-center mt-5 col-12'>
      <div className=' w-25 ms-3'>
        <ImageC 
        urlImage={product.image} 
        textAlt={product.title} 
        widImage={"100%"}
        />
      </div>

          <div className='w-50 mb-5'>
              <h3 className='ms-3'>{product.title}</h3>
              <p className='ms-3'>{product.price}</p>
              <p className='ms-3 d-flex justify-content-around'>{product.description}</p>

            <div className='text-center d-flex justify-content-center'>
              <button className='btn-1 me-3' onClick={addProdFav}>
                Añadir a favoritos
                </button>
              <button className='btn-2 me-3'onClick={addProdCart}>
                Añadir al carrito
                </button>
            </div>
          </div>;
    </div><br /><br /><br /><br /><br /><br /><br />
  </>
    
  ) 
};

export default ProductPage