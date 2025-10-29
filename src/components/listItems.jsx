import React from 'react'
import Item from './item'

const ListItems = ({items,onTaggleItem,HandleDeletItem}) => {
  return (
      <ul>
        {items.map((item)=>{
          const { id, description, selected } = item;
          return(
          <Item key ={item.id} HandleDeletItem={HandleDeletItem} id={id} description={description} selected={selected} onTaggleItem={onTaggleItem} />
          )
        })}
      </ul>
  )
}

export default ListItems
