import React, { useContext, useEffect, useState } from "react";
import { CarritoContexto } from "./CarritoContexto.jsx";
import "../css/Carrito.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Carrito = () => {
  const { carrito, removerDelCarrito } = useContext(CarritoContexto);
  const [idPreferencia, setIdPreferencia] = useState(null);

  // Public Key de MercadoPago
  useEffect(() => {
    initMercadoPago("TEST-09dc439c-f85a-48d5-8ed0-d66a6db8c1d3", {
      locale: "es-AR",
    }); // Cambia el idioma si es necesario
  }, []);

  const obtenerTotal = (itemsCarrito) =>
    itemsCarrito.reduce(
      (total, item) => total + (item.quantity || 0) * item.price,
      0
    );

  const crearPreferencia = async () => {
    try {
      const respuesta = await fetch(
        "https://api.mercadopago.com/checkout/preferences",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Access Token de MercadoPago
            Authorization:
              "Bearer TEST-1310105084619699-061723-980986c7f2e9f718e2de9633cfef16e9-234650284",
          },
          body: JSON.stringify({
            items: carrito.map((item) => ({
              title: item.nameProduct,
              quantity: item.quantity,
              unit_price: item.price,
              currency_id: "ARS",
            })),
          }),
        }
      );

      const datos = await respuesta.json();
      setIdPreferencia(datos.id);
    } catch (error) {
      console.error("Error creando preferencia:", error);
    }
  };

  useEffect(() => {
    if (carrito.length > 0) {
      crearPreferencia();
    }
  }, [carrito]);

  return (
    <>
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p className="cart-empty">Vacío</p>
      ) : (
        <ul>
          {carrito.map((item) => (
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
                onClick={() => removerDelCarrito(item.id)}
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
            </li>
          ))}
        </ul>
      )}
      {carrito.length > 0 && (
        <>
          <div className="cart-total">
            <h3>Total:</h3>
            <span className="total-pagar">
              ${obtenerTotal(carrito).toFixed(2)}
            </span>
          </div>
          {idPreferencia && (
            <Wallet
              initialization={{
                preferenceId: idPreferencia,
              }}
              locale="es-AR" // Cambia el idioma si es necesario
            />
          )}
        </>
      )}
    </>
  );
};

export default Carrito;
