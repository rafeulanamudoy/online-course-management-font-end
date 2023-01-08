import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    let activeStyle = {
        textDecoration: "none",

    };


    return (
        <Navbar className='nav-container' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >Content Management </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>

                        <NavLink className="link-style" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="/home">Home</NavLink>

                        <NavLink className="link-style" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="/readingHistory">Reading History</NavLink>
                        <NavLink className="link-style" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="/addCourse">Add Course</NavLink>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;