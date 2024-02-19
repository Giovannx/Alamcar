import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Avatar from "../assets/Avatar.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Group1.png";
import Icon1 from "../assets/grupo.png";
import Icon2 from "../assets/AsistenciaAlCliente.png";
import Icon3 from "../assets/calendario.png";
import Icon4 from "../assets/mapa.png";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const user = {
  avatar: Avatar,
  correo: "giovanni.alamosc@gmail.com",
  nombre: "Giovanni",
  token: "123",
};

function Header() {
  const [userdata, setUserdata] = useState({});
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  const handleLogin = () => {
    setUserdata(user);
    handleShow();
  };
  useEffect(() => {}, []);

  return (
    <>
      <Navbar
        bg=""
        collapseOnSelect
        expand="lg"
        className="custom-navbar"
        style={{ height: "7rem", maxWidth: "100%", backgroundSize: "contain" }}>
        <Container style={{ maxWidth: "100%" }}>
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <img
                style={{ maxWidth: "120px" }}
                src={Logo}
                alt="Logo"
                className="Logo"
                data-bs-toggle="collapse"
                data-bs-target="#responsive-navbar-nav"
              />
              <span style={{ fontSize: "30px", marginLeft: "15px" }}></span>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">{}</Nav>
            </Navbar.Collapse>
          </Navbar>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              style={{ maxWidth: "100%", backgroundSize: "contain" }}>
              <Link to="/">
                <button
                  id="NavBoton"
                  type="button"
                  class="btn btn-info"
                  style={{
                    marginRight: "1vw",
                    marginLeft: "1vw",
                    maxWidth: "100%",
                  }}>
                  Inicio
                </button>
              </Link>
              <Link to="/hospitales">
                <button
                  id="NavBoton"
                  type="button"
                  class="btn btn-info"
                  style={{
                    marginRight: "1vw",
                    marginLeft: "1vw",
                    maxWidth: "100%",
                  }}>
                  Repuestos
                </button>
              </Link>
              <Link to="/info">
                <button
                  id="NavBoton"
                  type="button"
                  class="btn btn-info"
                  style={{
                    marginRight: "1vw",
                    marginLeft: "1vw",
                    maxWidth: "100%",
                  }}>
                  Historia
                </button>
              </Link>
              <Link to="/info">
                <button
                  id="NavBoton"
                  type="button"
                  class="btn btn-info"
                  style={{
                    marginRight: "1vw",
                    marginLeft: "1vw",
                    maxWidth: "100%",
                  }}>
                  Servicio Express
                </button>
              </Link>
              <Link to="/info">
                <button
                  id="NavBoton"
                  type="button"
                  class="btn btn-info"
                  style={{
                    marginRight: "1vw",
                    marginLeft: "1vw",
                    maxWidth: "100%",
                  }}>
                  Contactanos
                </button>
              </Link>
            </Nav>
            <form id="Buscador" class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder=""
                aria-label="Search"></input>
              <button
                class="btn btn-outline-light"
                type="submit"
                className="BotonBuscar">
                Buscar
              </button>
            </form>
            <div className="space"></div>
            {/* //operador ternario */}
            {userdata.nombre ? (
              <img src={Avatar} alt="Avatar" className="navbar_avatar" />
            ) : (
              <Button
                id="NavBotonLogin"
                variant="primary"
                onClick={handleShow}
                className="btn-custom"
                style={{
                  fontSize: "15px",
                  marginRight: "1vw",
                  marginLeft: "auto",
                  maxWidth: "100%",
                }}>
                Login
              </Button>
            )}
            <Modal show={show} onHide={handleShow}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="ingresa password"
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={handleLogin}>
                  Login
                </Button>
              </Modal.Footer>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar
        style={{
          background: "#262626",
          backgroundSize: "contain",
          height: "100px",
          maxWidth: "100%",
        }}
        collapseOnSelect
        expand="lg"
        className="custom-navbar">
        <Link to="/">
          <button
            id="NavBoton"
            type="button"
            class="btn btn-info"
            style={{
              marginRight: "10vw",
              marginLeft: "10vw",
              maxWidth: "25%",
            }}
            // background: `url(${Icon1})`
          >
            <img style={{ maxWidth: "3vw" }} src={Icon1} alt="Converacion" />
            <span>Comentarios</span>
          </button>
        </Link>

        <Link to="/">
          <button
            id="NavBoton"
            type="button"
            class="btn btn-info"
            style={{ marginRight: "10vw", marginLeft: "10vw", maxWidth: "25%" }}
            // background: `url(${Icon1})`
          >
            <img
              style={{ maxWidth: "3vw" }}
              src={Icon2}
              alt="Preguntas y Respuestas"
            />
          </button>
        </Link>
        <Link to="/">
          <button
            id="NavBoton"
            type="button"
            class="btn btn-info"
            style={{ marginRight: "10vw", marginLeft: "10vw", maxWidth: "25%" }}
            // background: `url(${Icon1})`
          >
            <img style={{ maxWidth: "3vw" }} src={Icon3} alt="Calendario" />
          </button>
        </Link>
        <Link to="/">
          <button
            id="NavBoton"
            type="button"
            class="btn btn-info"
            style={{ marginRight: "10vw", marginLeft: "10vw", maxWidth: "25%" }}
            // background: `url(${Icon1})`
          >
            <img style={{ maxWidth: "3vw" }} src={Icon4} alt="Mapa" />
          </button>
        </Link>
      </Navbar> */}
    </>
  );
}

export default Header;
