import React, { useState,useEffect } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';
import { BiMinusCircle } from 'react-icons/bi';
import { render } from '@testing-library/react';

 var a = new FormData();
    
  

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
  
  
  
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  
  return (
  todos.map((todo, index) =>  
  
  
    <div
  
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
     
    >
      
     
        
    
      <div key={todo.id} onClick={() => completeTodo(todo.id)} >
     <form>
    
     <p key={index}  > {todo.text}</p>
     
     </form>
       
    
      </div>
     

      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <BiMinusCircle
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='minus-icon'
        />
        <TiPlus
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='plus-icon'
        />
         
      </div>
     
    </div>
    
  )
  ); 
  }
 


 
export default Todo;