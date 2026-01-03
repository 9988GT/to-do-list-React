import React from 'react'
import {useState} from 'react';

function todolistinput(props) {
  const[inputValue,setinputValue] =  useState("");
  
 
  return (
    <div className="input-container">
        <input  className="input-box-todo"
         type="text"
          placeholder="Add a new task.."
          value={inputValue}
          onChange={e=>{
            setinputValue(e.target.value);

          }} />
        <button className="add-btn"
        onClick={()=>{
         
          props.addList(inputValue)
          setinputValue("");

        }}>+</button>
       
    </div>
  )
}

export default todolistinput
