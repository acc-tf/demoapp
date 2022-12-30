import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export function Navbar(){
    return <NavbarBs className="shadow-sm mb-3 bg-gray" id="navbar">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to = "/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to = "/Users" as={NavLink}>Users</Nav.Link>
                <Nav.Link to = "/Errors" as={NavLink}>Errors</Nav.Link>
            </Nav>
            <Button 
            style={{width: "3 rem", height:"3 rem", position: "relative"}}
            
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </Button>
        </Container>
    </NavbarBs>
}