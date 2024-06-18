import React, { createContext, useState } from "react";
// CAMBIAR ESTA RUTA CON LA NUEVA DE LA BASE DE DATOS
import { data } from "../components/BaseDatosFalsa/data";

export const CarritoContexto = createContext();

export const ProveedorCarrito = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [contadorProductos, setContadorProductos] = useState(0);

  const agregarAlCarrito = (productoId, cantidad) => {
    setContadorProductos(contadorProductos + cantidad);
    const productoParaAgregar = data.find((item) => item.id === productoId);
    if (productoParaAgregar) {
      const productoExistente = carrito.find((item) => item.id === productoId);
      if (productoExistente) {
        setCarrito(
          carrito.map((item) =>
            item.id === productoId
              ? { ...item, quantity: item.quantity + cantidad }
              : item
          )
        );
      } else {
        setCarrito([
          ...carrito,
          { ...productoParaAgregar, quantity: cantidad },
        ]);
      }
    }
  };

  const removerDelCarrito = (productoId) => {
    const productoExistente = carrito.find((item) => item.id === productoId);
    if (productoExistente) {
      if (productoExistente.quantity > 1) {
        setCarrito(
          carrito.map((item) =>
            item.id === productoId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        setCarrito(carrito.filter((item) => item.id !== productoId));
      }
      setContadorProductos(contadorProductos - 1);
    }
  };

  const agregarAFavoritos = (producto) => {
    setFavoritos([...favoritos, producto]);
  };

  const removerDeFavoritos = (productoId) => {
    setFavoritos(favoritos.filter((item) => item.id !== productoId));
  };

  return (
    <CarritoContexto.Provider
      value={{
        carrito,
        favoritos,
        contadorProductos,
        agregarAlCarrito,
        removerDelCarrito,
        agregarAFavoritos,
        removerDeFavoritos,
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
};
