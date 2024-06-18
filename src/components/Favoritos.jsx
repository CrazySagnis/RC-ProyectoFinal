import React, { useContext } from "react";
import { CarritoContexto } from "./CarritoContexto.jsx";
import "../css/Carrito.css";

const Favoritos = () => {
  const { favoritos, removerDeFavoritos, agregarAlCarrito } =
    useContext(CarritoContexto);

  return (
    <>
      <h2>Favoritos</h2>
      {favoritos.length === 0 ? (
        <p className="cart-empty">Vacío</p>
      ) : (
        <ul>
          {favoritos.map((item) => (
            <li key={item.id} className="cart-product">
              <img
                src={item.img}
                alt={item.nameProduct}
                className="product-img"
              />
              <div className="info-cart-product">
                <span className="titulo-producto-carrito">
                  {item.nameProduct}
                </span>
                <div className="quantity-circle">{item.quantity || 0}</div>
                <span className="precio-producto-carrito">${item.price}</span>
              </div>
              <button
                className="btn-remove"
                onClick={() => removerDeFavoritos(item.id)}
              >
                <svg
                  className="icon-close"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                className="btn-add-to-cart"
                onClick={() => agregarAlCarrito(item.id, 1)}
              >
                Agregar al Carrito
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Favoritos;
