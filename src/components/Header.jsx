import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Header() {

  const { currentUser, logout } = useContext(AuthContext);


  return(
    <Navbar bg="dark" data-bs-theme="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard">
          <i class="bi bi-calendar3 me-2"></i>
          Event Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/add-event">Add Event</Nav.Link>
            <Nav.Link as={Link} to="/help">Help</Nav.Link>
          </Nav>
          <Nav>
            {currentUser ?(
              <>
                <Navbar.Text className="me-2">{currentUser.username}</Navbar.Text>
                <Button variant="outline-light" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}