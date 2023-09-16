import React from 'react';
import LineItems from './lineItems';

function ItemList({ checkItem, removeItem, items }) {
  return (
    <ul className="overflow-scroll w-auto h-[400px]">
      {items.map((item)=>(
        <LineItems key={item.id}  item={item} checkItem={checkItem} removeItem={removeItem} />   
     ))}
    </ul>
  );
}

export default ItemList;
