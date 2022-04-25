import React from 'react'

export default function Child(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler(props.name)}>Greet Parent from child</button>
    </div>
  )
}
