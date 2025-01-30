
import React from "react";
import './../styles/App.css';

import React, { useState } from 'react';


const App = () => {
  const [task, setTask] = useState(''); 
  const [todos, setTodos] = useState([]); 

  // Handle the input field change
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  // Add a new todo to the list
  const handleAddTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask(''); // Clear input field after adding
    }
  };

  // Remove a todo from the list
  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
