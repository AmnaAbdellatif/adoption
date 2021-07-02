import React, { useState,useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { TiPlus } from 'react-icons/ti';
import { BiMinusCircle } from 'react-icons/bi';
function TodoList() {
  const [todos, setTodos] = useState([]);
var a= new FormData();
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
     
      return;
      
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log("aaaaaaaaaa",...todos);
  
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };
 

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const [Commentveto,setCommentveto]=useState([]);
  useEffect(() => {
  
    axios.get(' http://127.0.0.1:8000/getvetoComment').then((response) => {
    console.log(response);
    setCommentveto(response.data);

  
});
},[] ,);
  return (
    <>
      <h1>Popular Opinions</h1>
      { Commentveto.map((val, key) => {
  return(
   
      <div className={val.isComplete ? 'todo-row complete' : 'todo-row'}          key={val.id} >
      <Typography variant="body1" component="h6">
      {val.userName}: Dr.{val.comment}
      </Typography>
      <div className='icons'>
      <BiMinusCircle
          //onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='minus-icon'
        />
        <TiPlus
         // onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='plus-icon'
        />
        </div>
      </div>
     
    
  ) })}
      <TodoForm onSubmit={addTodo}  />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
       
     
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    
    </>
  );
 
}

export default TodoList;