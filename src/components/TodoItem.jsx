import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  const { id, title, completed } = todo;

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
