import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: "Shiva"
    }
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}!`)
  }

  render() {
    return (
      <div>
        <Child name="Ganapathy" greetHandler={this.greetParent} />
        <Child name="Murugan" greetHandler={this.greetParent} />
      </div>
    )
  }
}
