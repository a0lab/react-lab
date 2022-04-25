import React from 'react'
import ItemView from './ItemView'

function ItemList() {
  const items = [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5007", "type": "Powdered Sugar" },
    { "id": "5006", "type": "Chocolate with Sprinkles" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
  ]
  const itemList = items.map(item => (
    <ItemView key={item.id} item={item}></ItemView>
  ))
  return (
    <div>{itemList}</div>
  )
}

export default ItemList