import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Page 1</Nav.Link>
                    <Nav.Link href="/add">Page 2</Nav.Link>
                    <Nav.Link href="/read">Page 3</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;