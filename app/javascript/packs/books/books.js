import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'

import Book from './book'

export default class Books extends React.Component
{
  books () {
    if (this.props.author) {
      return this.props.books.filter(book => book.authors.find(author => author.name === this.props.author))
    } else {
      return this.props.books
    }
  }

  render () {
    return (
      <Row>
        {this.books().map((book) => <Book key={book.id} selectAuthor={this.props.selectAuthor} {...book}/>)}
      </Row>
    )
  }
}
