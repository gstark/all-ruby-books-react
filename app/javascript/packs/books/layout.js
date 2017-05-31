import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Grid } from 'react-bootstrap'

import Books from './books'

export default class Layout extends React.Component
{
  constructor (props) {
    super(props)

    this.state = { books: [ {id: 5, title: 'hello', editor: 'Frank', year: 1980, prices: '$5'}] }
  }

  render () {
    return (
      <div>
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
        <Grid>
          <Books books={this.state.books}/>
        </Grid>
      </div>
    )
  }
}

