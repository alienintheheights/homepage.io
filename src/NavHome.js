import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Social from './Social'

export default function NavHome() {
    return (
        <Navbar id='fauxmat-navcenter'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <span>
                    <Nav className="mr-auto">
                        <Nav.Link className='fauxmat-navspacing' href="/">Home</Nav.Link>
                        <Nav.Link className='fauxmat-navspacing' href="#music">Music</Nav.Link> 
                        <Nav.Link className='fauxmat-navspacing' href="#videos">Videos</Nav.Link>
                        <Nav.Link className='fauxmat-navspacing' href="#posts">Blog</Nav.Link>
                        <Nav.Link className='fauxmat-navspacing' href="#etc">Etc</Nav.Link>
                        <Nav.Link className='fauxmat-navspacing' href="#about">About</Nav.Link>
                    </Nav>
                </span>
                <span id='fauxmat-nav-social'><Social/></span>
            </Navbar.Collapse>
        </Navbar>    
    )
}                                                                                                