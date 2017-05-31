import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Grid } from 'react-bootstrap'
import jsonFetch from 'json-fetch'
import flatMap from 'lodash.flatmap'
import uniq from 'lodash.uniq'

import Books from './books'

export default class Layout extends React.Component
{
  constructor (props) {
    super(props)

    this.state = { books: [], authors: [], author: null }

    jsonFetch('/books.json', {
      method: 'GET',
    })
    .then(response => this.setState({ books: response.body, authors: [null].concat(this.authors(response.body)) }))
    .catch(err => console.log(err.name, err.message))
  }

  authors = (books) => uniq(flatMap(books, (book) => book.authors.map((author) => author.name))).sort((a,b) => a.localeCompare(b))

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
              {this.state.authors.map((author) => <MenuItem key={author || 'All'} eventKey={author || 'All'} active={author === this.state.author} onSelect={this.selectAuthor.bind(this, author)}>{author || 'All'}</MenuItem>)}
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
