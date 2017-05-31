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

  flatMap = (array, callback) =>  [].concat.apply([], array.map(callback))

  authors = (books) => [...new Set(this.flatMap(books, (book) => book.authors.map((author) => author.name)))].sort((a,b) => a.localeCompare(b))

  selectAuthor = (author) => {
    this.setState({author: author})
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
            <NavDropdown eventKey={'authors'} title={this.state.author ? this.state.author : "Authors"} id='authors'>
              <MenuItem key='All' eventKey='All' active={null === this.state.author} onSelect={this.selectAuthor.bind(this, null)}>All</MenuItem>
              {this.state.authors.map((author) => <MenuItem key={author} eventKey={author} active={author === this.state.author} onSelect={this.selectAuthor.bind(this, author)}>{author}</MenuItem>)}
            </NavDropdown>
          </Nav>
        </Navbar>
        <Grid>
          <Books selectAuthor={this.selectAuthor} books={this.state.books} author={this.state.author}/>
        </Grid>
      </div>
    )
  }
}
