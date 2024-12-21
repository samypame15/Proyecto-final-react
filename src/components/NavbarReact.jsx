import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
function NavbarReact() {

  const {cartQuantity} = useCart()
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand to='/' as={NavLink}>Emicake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/' as={NavLink}>Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/products/mas vendidos'>Mas Vendidos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={NavLink} to='/products/ofertas'>
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={NavLink} to='/products/nuevos'>Nuevos</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
            <NavLink to='/cart' style={{textDecoration:'none'}}>
              <CartWidget/>
            </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;

