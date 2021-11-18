import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';

import UserNav from './UserNav';
import logo from '../../pictures/logo.png';

function Header(props) {

  return (
    <div className="Navbar mb-3">
      <Navbar  bg ="light" variant="success" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img
          src ={logo}
          width="180"
          height ="60"
          className="d-inline-block align-top"
          alt="ShroomTycoon Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/" href="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/mushrooms" href="/mushrooms">Mushrooms</Nav.Link>
          <Nav.Link as={Link} to="/recipes" href="/recipes">Recipes</Nav.Link>
          <Nav.Link as={Link} to="/tools" href="/tools">Tools</Nav.Link>
          <Nav activeKey={props.location.pathname} className="ml-auto">
            <UserNav
              isAuthenticated={props.isAuthenticated}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default withRouter(Header);

