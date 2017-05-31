import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Grid } from 'react-bootstrap'
import jsonFetch from 'json-fetch'

import Books from './books'

export default class Layout extends React.Component
{
  constructor (props) {
    super(props)

    this.state = { books: [], author: null }

    jsonFetch('/books.json', {
      method: 'GET',
    })
    .then(response => this.setState({ books: response.body }))
    .catch(err => console.log(err.name, err.message))
  }

  authors () {
    const flatMap = (array, callback) => [].concat.apply([], array.map(callback))

    const allNames = flatMap(this.state.books, (book) => book.authors.map((author) => author.name))

    return [...new Set(allNames)].sort((a,b) => a.localeCompare(b))
  }

  books () {
    if (this.state.author) {
      return this.state.books.filter(book => book.authors.filter(author => author.name === this.state.author).length > 0)
    } else {
      return this.state.books
    }
  }

  selectAuthor (author) {
    this.setState({author: author})
  }

  authorMenuTitle () {
    return this.state.author ? this.state.author : "Authors"
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
            <NavDropdown eventKey={'authors'} title={this.authorMenuTitle()} id='authors'>
              {this.authors().map((author) => <MenuItem key={author} eventKey={author} onSelect={this.selectAuthor.bind(this, author)}>{author}</MenuItem>)}
            </NavDropdown>
          </Nav>
        </Navbar>
        <Grid>
          <Books books={this.books()}/>
        </Grid>
      </div>
    )
  }
}

