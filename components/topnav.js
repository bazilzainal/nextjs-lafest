import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import logo from "../public/images/logo.png";
import styles from "./topnav.module.css";
import { useState } from "react";

export default function TopNav() {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(false);
    }

    return (
        <>
            {/* Make navbar not collapse, too few buttons for now */}
            {/* <Navbar expanded={show} className={styles.topnav} expand="md" style={{ justifyContent: `space-around` }}> */}
            <Navbar expanded={show} className={styles.topnav} style={{ justifyContent: `space-around` }}>
                <Container className="mx-auto">
                    <Link href="/" passHref>
                        <Navbar.Brand className={styles.navbrand}>
                            <Image src={logo} width={70} height={70} onClick={handleClick}></Image>
                        </Navbar.Brand>
                    </Link>
                    {/* <Link href="/">
                        <a className={styles.button} onClick={handleClick}>Buy Tickets</a>
                    </Link> */}
                    <Navbar.Toggle className={styles.toggler} onClick={() => setShow(show ? false : "expanded")} />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className={styles.navsection}>
                            <Link href="/" passHref>
                                <Nav.Link onClick={handleClick}>Home</Nav.Link>
                            </Link>
                            {/* <Link href="/tickets" passHref>
                                <Nav.Link onClick={handleClick}>Tickets</Nav.Link>
                            </Link> */}
                            <Link href="/about" passHref>
                                <Nav.Link onClick={handleClick}>About</Nav.Link>
                            </Link>
                            <Nav.Link href="/register" onClick={handleClick}>
                                Register
                            </Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
