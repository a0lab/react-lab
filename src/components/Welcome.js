import React, { Component } from 'react';

class Welcome extends Component {

    render() {
        const {firstName, lastName } = this.props
        return <h1>Welcome {lastName}, {firstName}!</h1>
    }

}
export default Welcome;