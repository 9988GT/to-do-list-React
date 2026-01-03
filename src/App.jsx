import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolistinput from './components/todolistinput.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  const[listTodo,setlistTodo]=useState([]);
  let addlist=(inputValue)=>{
    setlistTodo([...listTodo,inputValue]);
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setlistTodo([...newListTodo]);
  }
  return (
  <div className="main-container">
    <div className="center-container">
      <Todolistinput  addList={addlist}/>
      <h1 className='app-heading'>TODO</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return(
         <TodoList  item={listItem} key={i}  index={i}  deleteItem={deleteListItem}/>
        )
      })}
   
    </div>
  </div>
  )
}

export default App
