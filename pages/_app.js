import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// Add bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Custom CSS
import "../styles/global.css";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand>Langkawi Writer's Festival</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" passHref>
                                <Nav.Link>Home</Nav.Link>
                            </Link>
                            <Link href="/posts/first-post" passHref>
                                <Nav.Link>First Post</Nav.Link>
                            </Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Component {...pageProps} />
        </div>
    );
}
