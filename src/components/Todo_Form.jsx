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
    try{
      if (input.trim() !== '') {
        if (todo.length >= 14) {
          alert("Maximum todo limit reached!");
          return;
        }
        const newTodo = {
            task: input,
            checked: false,
        }

      setTodo([...todo , newTodo])
      todoInput.current.focus();
      todoInput.current.value = " ";
      setInput("")
    }
    else {
      alert("Do not leave the To do field blank!")
    }
  }
  catch{
    alert("Do not leave the To do field blank!")
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