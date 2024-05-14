import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
  
    const addTodo = (text) => {
      const newTodo = {
        id: todos.length + 1,
        title: text,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    const toggleTodo = (id) => {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    };
  
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    );
  };
  export default TodoApp