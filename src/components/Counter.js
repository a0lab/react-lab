import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        this.setState((prevState)=>({
            count: prevState.count + 1

        }),() => {
          console.log('Call back value ', this.state.count)
        })
    }

    fiveIncrement() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    const {count} = this.state;
    return (
        <div>
            <div>Counter - {this.state.count} - {count}</div>
            <button onClick={() => this.fiveIncrement()}>Increment</button>
        </div>
      
    )
  }
}

export default Counter