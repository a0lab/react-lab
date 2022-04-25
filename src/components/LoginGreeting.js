import React, { Component } from 'react'

export default class LoginGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }

  render() {
    return this.state.isLoggedIn? (
        <div>
          <div>Welcome Jayaraman!</div>
        </div>
      ):(
        <div>
          <div>Welcome Guest!</div>
        </div> 
      ) 
    // return (
    //   <div>
    //     <div>Welcome Jayaraman!</div>
    //     <div>Welcome Guest!</div>
    //   </div>
    // )
  }
}
