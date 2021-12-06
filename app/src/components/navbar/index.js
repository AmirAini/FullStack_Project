import React, { Fragment } from "react";
import {Navbar,Nav, Container, NavLink, FormControl, Dropdown} from 'react-bootstrap';

function NavbarComponent(props){
    return(
        
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
          
            
    )
}

export default NavbarComponent;