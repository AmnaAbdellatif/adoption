import React, { useState, useEffect, useRef } from 'react';


  
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
var a = new FormData();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
   
  });
var a= new FormData();
  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
      
    });
   
    setInput('');
  };
 
  return (
    
    <form onSubmit={handleSubmit} className='todo-form'>
     
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
            
          />
         
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a 
            comment'
            value={input}
           
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          
          />
        
          
          <button onClick={handleSubmit} className='todo-button'>
            Add Comment
          </button>
         
        </>
         
      )
      }
      
    </form>
    
    
  );
  
}

export default TodoForm;