import React from 'react'
import { FaCheck } from "react-icons/fa6";
const Item = ({ id,description,selected, onTaggleItem,HandleDeletItem}) => {
  return (
    <li>
        <div>
            <label htmlFor={`item${id}`}>
                <input type="checkbox"  id={`item${id}`} onChange={()=> onTaggleItem(id)} checked={selected} />
                {selected? <FaCheck className='icon' /> : <span></span>}
            </label>
            <span className={`description${selected}`}>{description}</span>
        </div>
        <button onClick={()=>HandleDeletItem(id)}>&#x2613;</button>
    </li>
  )
}

export default Item

