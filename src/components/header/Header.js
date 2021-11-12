import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import UserNav from './UserNav';

function Header(props) {

  return (
    <div className="Navbar mb-3">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/">Capstone React FE</Navbar.Brand>
        <Nav.Link to="/tools" href="/tools">Tools</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/mushrooms">Mushrooms</Nav.Link>
          <Nav.Link href="/recipes">Recipe</Nav.Link>
          <Nav.Link href="/tools">Tools</Nav.Link>
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
