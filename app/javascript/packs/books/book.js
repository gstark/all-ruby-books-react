import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Col } from 'react-bootstrap'

import './book.scss'

export default class Book extends React.Component
{
  render () {
    return (
      <Col md={4}>
        <div className="book-panel">
          <h2>{this.props.title}</h2>
          <p className="year">
            {this.props.editor}
            , {this.props.year}
          </p>
          <p className="price">{this.props.prices}</p>
        </div>
      </Col>
    )
  }
}
