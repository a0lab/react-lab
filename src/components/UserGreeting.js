import React, { Component } from 'react'

export default class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <div>Welcome Jayaraman!</div>
        </div>
      )
    } else {
      return (
        <div>
          <div>Welcome Guest!</div>
        </div> 
      )
    } 
    // return (
    //   <div>
    //     <div>Welcome Jayaraman!</div>
    //     <div>Welcome Guest!</div>
    //   </div>
    // )
  }
}
