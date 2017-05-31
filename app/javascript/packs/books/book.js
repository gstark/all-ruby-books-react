import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Col } from 'react-bootstrap'

import './book.scss'

export default class Book extends React.Component
{
  renderAuthors(authors) {
    return authors.map(author => author.name).join(", ")
  }

  renderCategories(categories) {
    return (
      <ul className="categories">
        {categories.map(category => <li key={category.name}>{category.name}</li>)}
      </ul>
    )
  }

  render () {
    return (
      <Col md={4}>
        <div className="book-panel">
          <h2>{this.props.title}</h2>
          {this.renderCategories(this.props.categories)}
          <p className="authors">{this.renderAuthors(this.props.authors)}</p>
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
