import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Button,
  Container,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Carrito from "./Carrito";
import Favoritos from "./Favoritos";
import { CarritoContexto } from "./CarritoContexto";
import { data } from "../components/BaseDatosFalsa/data"; // CAMBIAR ESTA RUTA POR LA NUEVA DE LA BASE DE DATOS.
import "../css/Navbar.css";
import { ModalIniciarSesion, ModalRegistrarse } from "./RegistroModal1";

function realizarSolicitud(query, data) {
  return new Promise((resolve, reject) => {
    const opcionesFiltradas = data.filter((option) =>
      option.nameProduct.toLowerCase().includes(query.toLowerCase())
    );
    setTimeout(() => {
      resolve(opcionesFiltradas);
    }, 1000); // Simular un retraso de 1 segundo
  });
}

function BarraDeNavegacion() {
  const [estaCargando, setEstaCargando] = useState(false);
  const [opciones, setOpciones] = useState([]);
  const {
    carrito,
    favoritos,
    contadorProductos,
    removerDelCarrito,
    agregarAFavoritos,
    removerDeFavoritos,
  } = useContext(CarritoContexto);

  const manejarBusqueda = (query) => {
    setEstaCargando(true);
    realizarSolicitud(query, data)
      .then((resultados) => {
        setOpciones(resultados);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      })
      .finally(() => {
        setEstaCargando(false);
      });
  };

  return (
    <BootstrapNavbar className="navbar" expand="lg">
      <Container fluid>
        <BootstrapNavbar.Brand href="#home" className="navbar-brand">
          Navbar
        </BootstrapNavbar.Brand>
        <AsyncTypeahead
          id="async-pagination-example"
          isLoading={estaCargando}
          labelKey={(option) => option.nameProduct}
          maxResults={50}
          minLength={2}
          onSearch={manejarBusqueda}
          options={opciones}
          paginate
          placeholder="Buscar producto.."
          renderMenuItemChildren={(option) => (
            <div key={option.id}>
              <img
                src={option.img}
                width="30"
                height="30"
                alt={option.nameProduct}
              />
              <span>{option.nameProduct}</span>
            </div>
          )}
          filterBy={(option, query) =>
            option.nameProduct
              .toLowerCase()
              .includes((query.query || "").toLowerCase())
          }
        />

        <div className="container-icon">
          <Dropdown>
            <Dropdown.Toggle className="dropdown-toggle" id="dropdown-basic">
              <svg
                className="icon-cart"
                xmlns="http://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0.375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0.375.375 0 01.75 0z"
                />
              </svg>
              <span className="count-products" id="contador-productos">
                {contadorProductos}
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="container-cart-products">
              <Carrito />
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="container-icon">
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown-toggle"
              id="dropdown-favorites">
              <svg
                className="icon-cart"
                xmlns="http://www.w3.org/2000/svg"
                fill="gold"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                />
              </svg>
              <span className="count-products" id="contador-favoritos">
                {favoritos.length}
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="container-favorites-products">
              <Favoritos />
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Container fluid>
            <ModalIniciarSesion />

            <ModalRegistrarse />
          </Container>

          <Nav className="mr-auto">
            <Nav.Link eventKey="1" href="#/home">
              Inicio
            </Nav.Link>
            <Nav.Link eventKey="1" href="#/home">
              Destacado
            </Nav.Link>
            <Nav.Link eventKey="1" href="#/home">
              Contacto
            </Nav.Link>

            <NavDropdown title="Categorías" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Almacén</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Bebidas</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Frescos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Desayuno</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5">Limpieza</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6">Perfumería</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.7">Congelados</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.8">Mascotas</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.9">
                Frutas y Verduras
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default BarraDeNavegacion;
