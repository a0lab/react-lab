import React from 'react';

// function Greet() {
//     return <h2>Hello Jayaraman!</h2>
// }

const Greet = (props) => {
    return (
        <div>
            <h2>Hello {props.lastName}, {props.firstName}!</h2>
            {props.children}
        </div>
    )
}

export default Greet;
