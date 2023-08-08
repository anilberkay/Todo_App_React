import React, { useEffect, useRef, useState } from 'react'
import { Todo_item } from './Todo_item';


 const Todo_Form = () => {

  const todoInput = useRef()

  const [input,setInput] = useState();

  const [todo,setTodo] = useState([]); 


  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newTodo = {
          task: input,
          checked: false,
      }

    setTodo([...todo , newTodo])
    todoInput.current.focus();
    todoInput.current.value = " ";
  }
  }
  
  useEffect(() => {
    
  },[todo])

  return (
    <div className='todo-container'>
      <form onSubmit={(e) => handleSubmit(e)}  className='todo-form'>
          <input ref={todoInput} className='todo-input' onChange={(e) => handleChange(e)} type="text" placeholder='Enter Todo'/>
          <input type="submit" className='todo-submit' value="To do!" />
      </form>
      <Todo_item todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default Todo_Form;