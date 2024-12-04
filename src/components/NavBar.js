import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="/Home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/adoptable">Adoptable Animals</Nav.Link>
                    <Nav.Link href="/create">Create Listing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;