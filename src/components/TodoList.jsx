import React from 'react'

function TodoList(props) {
  return (
    <div>
      <li className="list-item">
    ``    {props.item}
        <span className='icons'>
            <i class="fa-regular fa-trash-can"></i>
        </span>
      </li>
    </div>
  )
}

export default TodoList
