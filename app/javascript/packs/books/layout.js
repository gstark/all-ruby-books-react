import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Container } from 'react-bootstrap'

export default class Layout extends React.Component
{
  render () {
    return (
     <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">All Ruby Books</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

