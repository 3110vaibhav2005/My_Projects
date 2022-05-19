import React, { Component } from 'react'
import Book from './Book.gif'

export class Spinner2 extends Component {
  render() {
    return (
      <div className="container">
          <img src={Book} alt="loading" />  
      </div>
    )
  }
}

export default Spinner2
