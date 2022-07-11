import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { Button } from "react-bootstrap";

export default function TopNav() {
    return (
        // <Navbar bg="light" expand="lg">
        <Navbar bg="light" expand="lg" style={{ justifyContent: `space-around` }}>
            <Container className="mx-5">
                <Link href="/" passHref>
                    <Navbar.Brand>
                        <Image src={logo} width={70} height={70}></Image>
                    </Navbar.Brand>
                </Link>
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifySelf: `end` }}>
                    <Nav className="">
                        <Link href="/" passHref>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href="/tickets" passHref>
                            <Nav.Link>Tickets</Nav.Link>
                        </Link>
                        <Link href="/about" passHref>
                            <Nav.Link>About</Nav.Link>
                        </Link>
                        <Link href="/contact" passHref>
                            <Nav.Link>Contact</Nav.Link>
                        </Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
                <Link href="/" passHref>
                    <Button>Buy Tickets</Button>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}
