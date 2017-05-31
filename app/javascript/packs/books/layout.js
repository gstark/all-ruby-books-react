import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Grid } from 'react-bootstrap'
import jsonFetch from 'json-fetch'

import Books from './books'

export default class Layout extends React.Component
{
  constructor (props) {
    super(props)

    this.state = { books: [], authors: [], author: null }

    jsonFetch('/books.json', {
      method: 'GET',
    })
    .then(response => this.setState({ books: response.body, authors: this.authors(response.body) }))
    .catch(err => console.log(err.name, err.message))
  }

  flatMap(array, callback) {
    return [].concat.apply([], array.map(callback))
  }

  authors (books) {
    return [...new Set(this.flatMap(books, (book) => book.authors.map((author) => author.name)))].sort((a,b) => a.localeCompare(b))
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
              {this.state.authors.map((author) => <MenuItem key={author} eventKey={author} active={author === this.state.author} onSelect={this.selectAuthor.bind(this, author)}>{author}</MenuItem>)}
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

