import React, { Component } from 'react'

export default class ClassClick extends Component {
    
  clickHandler() {
    console.log("Class click")
  }
  render() {
    return (
      <div><button onClick={this.clickHandler}>Class Click</button></div>
    )
  }
}
