import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Col } from 'react-bootstrap'

import './book.scss'

export default class Book extends React.Component
{
  _clickAuthor = (event) => {
    this.props.selectAuthor(event.target.innerText)
  }

  render () {
    return (
      <Col md={4}>
        <div className="book-panel">
          <h2>{this.props.title}</h2>
          <ul className="categories">
            {this.props.categories.map(category => <li key={category.name}>{category.name}</li>)}
          </ul>
          <p className="authors">{this.props.authors.map(author => <span key={author.name} onClick={this._clickAuthor}>{author.name}</span>)}</p>
          <p className="year">{this.props.editor}, {this.props.year}</p>
          <p className="price">{this.props.prices}</p>
        </div>
      </Col>
    )
  }
}
