import { Component } from "react";
// import Navbar from 'react-bootstrap/Navbar'
// import { NavLink} from "react-router-dom";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";

class HeaderDev extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg" collapseOnSelect="true" variant="dark" >
          <Container>
          <Navbar.Brand>
            <NavLink to="/">
            <RiShoppingCart2Line />
            OUR SHOP
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Nav.Link>
                <NavLink to="/Product">Product</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/Register">Register</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/Login">Login </NavLink>
              </Nav.Link>

              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item to="/"></NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/Electricite">Electricite</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/Plomberie">Plomberie </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/Maconnerie">Maçonnerie</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/Quincallerie">Quincallerie</NavLink>
              </NavDropdown.Item>

   
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          {/* <Container>
          <Navbar
            bg="primary"
            expand="lg"
            collapseOnSelect="true"
            fixed="top"
            variant="light"
          >
            <RiShoppingCart2Line />
            <Navbar.Brand  to="/home">OUR SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/Product">Product</Link>
                <Link  to="/Register">Register</Link>
                 <Link to="/Login">Login </Link> 

             
                <NavDropdown title="Category" id="basic-nav-dropdown">
                  <NavDropdown.Item as="div">
                    <NavLink to="/Electricite">Electricite</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <NavLink to="/Plomberie">Plomberie</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <NavLink to="/Maconnerie">Maçonnerie</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <NavLink to="/Quincallerie">Quincallerie</NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container> */}
        </div>
      </>
    );
  }
}
export { HeaderDev };
