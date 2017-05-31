import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col } from 'react-bootstrap'

import Book from './book'

export default class Books extends React.Component
{
  render () {
    return (
      <Row>
        {this.props.books.map((book) => <Book key={book.id} {...book}/>)}
      </Row>
    )
  }
}

