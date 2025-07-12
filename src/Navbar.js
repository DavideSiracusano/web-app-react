import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Img1 from "./imgs/imgdavide.png";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="md" className="shadow-sm px-3 custom-navbar">
      <Container>
        <Navbar.Brand>
          <img className="img1" src={Img1} alt="Davide Siracusano" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            {/* Link di navigazione */}
            <Nav.Link as={Link} to="/home" className="custom-navlink">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="custom-navlink">
              About
            </Nav.Link>

            {/* Icone social come Nav.Link esterni */}
            <Nav.Link
              href="https://www.facebook.com/davide.siracusano/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-icons"
              style={{ color: "#3b5998" }}
            >
              <FaFacebook size={20} />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/davide.siracusano/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-icons"
              style={{ color: "#E4405F" }}
            >
              <FaInstagram size={20} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/davide-siracusano-804989221/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-icons"
              style={{ color: "#0077B5" }}
            >
              <FaLinkedin size={20} />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/DavideSiracusano"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-icons"
              style={{ color: "black" }}
            >
              <FaGithub size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
