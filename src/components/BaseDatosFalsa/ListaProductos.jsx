import React, { useContext } from "react";
import { CarritoContexto } from "../CarritoContexto.jsx";
import { data } from "./data.js"; // Asegúrate de que esta ruta es correcta
import "./ListaProductos.css"; // Importa el archivo CSS de la lista de productos

const ListaDeProductos = () => {
  const {
    carrito,
    favoritos,
    agregarAlCarrito,
    removerDelCarrito,
    agregarAFavoritos,
    removerDeFavoritos,
  } = useContext(CarritoContexto);

  const productos = data;

  if (!productos) {
    return <div>No hay productos disponibles</div>;
  }

  const estaEnCarrito = (productoId) => {
    return carrito.some((item) => item.id === productoId);
  };

  const estaEnFavoritos = (productoId) => {
    return favoritos.some((item) => item.id === productoId);
  };

  return (
    <div className="products-list">
      {productos.map((producto) => (
        <div className="product-item" key={producto.id}>
          {/* Mostrar imagen del producto */}
          <img src={producto.img} alt={producto.nameProduct} />
          {/* Mostrar título del producto */}
          <h3>{producto.nameProduct}</h3>
          {/* Mostrar precio del producto */}
          <p>Precio: ${producto.price}</p>
          {/* Botón para agregar al carrito */}
          <button onClick={() => agregarAlCarrito(producto.id, 1)}>
            Agregar
          </button>

          {/* Botón para remover del carrito (solo si el producto está en el carrito) */}
          {estaEnCarrito(producto.id) && (
            <button onClick={() => removerDelCarrito(producto.id)}>
              Remover del Carrito
            </button>
          )}
          {/* Botón para agregar/remover de favoritos */}
          <button
            onClick={() =>
              estaEnFavoritos(producto.id)
                ? removerDeFavoritos(producto.id)
                : agregarAFavoritos(producto)
            }
          >
            {estaEnFavoritos(producto.id)
              ? "Eliminar de favoritos"
              : "Agregar a favoritos"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaDeProductos;
