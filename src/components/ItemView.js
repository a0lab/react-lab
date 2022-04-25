import React from 'react'

function ItemView({item}) {
  return (
    <div>
      <h3>Item id :{item.id}. | And the type is {item.type}</h3>
    </div>
  )
}

export default ItemView