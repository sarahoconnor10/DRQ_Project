import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" >
            <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/create">Create</Nav.Link>
                <Nav.Link href="/adoptable">Read</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;