import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './books/layout'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Layout/>,
    document.getElementById('books')
  )
})
