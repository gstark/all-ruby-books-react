import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Grid } from 'react-bootstrap'
import jsonFetch from 'json-fetch'

import Books from './books'

export default class Layout extends React.Component
{
  constructor (props) {
    super(props)

    this.state = { books: [] }

    jsonFetch('/books.json', {
      method: 'GET',
    })
    .then(response => this.setState({ books: response.body }))
    .catch(err => console.log(err.name, err.message))
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

