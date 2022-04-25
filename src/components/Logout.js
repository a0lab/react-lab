import React, { Component } from 'react'

export default class Logout extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }

  render() {
    
    return this.state.isLoggedIn && <div>You are logged in. </div>
    // return (
    //   <div>
    //     <div>Welcome Jayaraman!</div>
    //     <div>Welcome Guest!</div>
    //   </div>
    // )
  }
}
