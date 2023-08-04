import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function AppNavbar() {
  const carts = useSelector((state)=>state.carts)
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Container>
        <Link className='navbar-brand' to="/cart">Cart App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to = "/" className='nav-link'>Products</Link>
            <Link to = "/cart" className='nav-link'>Cart {carts.length}</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;