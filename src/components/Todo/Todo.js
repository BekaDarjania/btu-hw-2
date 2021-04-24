import React from 'react';
import './Todo.css';

export default function Todo(props) {
  return (
    <div
      className={`todo ${props.completed ? 'todo-complete' : ''}`}
      key={props.id}>
      <h4 className="todo-title">{props.title}</h4>
    </div>
  );
}
