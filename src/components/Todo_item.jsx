import React, { useState } from 'react'
import { FaTrashAlt,FaRegCheckCircle } from 'react-icons/fa';


export const Todo_item = ({todo,setTodo}) => {

    const handleDelete = (index) => {
        const deletedTodo = todo.filter((_,i) => i !== index)
        setTodo(deletedTodo)
    }


    const handleChecked = (index) => {
        const checkedTodo = todo.map((item, i) => {
            if (i === index) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        setTodo(checkedTodo);
    };

    return (
        <div className='todo-item'>
            {todo.map((item, index) => {
            return (
                <div className='todo-div' key={index}>
                    <div className={`todo-p ${item.checked ? 'checked' : ''}`}>
                        
                        <p className='todo-child-p'>{item.task}</p>

                        <span className='icon'>
                        <FaRegCheckCircle className='icon-checked' onClick={() => handleChecked(index)} />
                        </span>

                        <span onClick={() => handleDelete(index)} className='icon'>
                        <FaTrashAlt className='icon-delete' />
                        </span>

                    </div>
                </div>
            );
            })}
      </div>
  )
}
