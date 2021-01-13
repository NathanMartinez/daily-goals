import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Daily Goals</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Profile</Nav.Link>
          <Nav.Link href="#">Settings</Nav.Link>
          <Button type="button">Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
