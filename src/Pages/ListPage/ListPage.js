import React, { useContext } from 'react';
import Todo from '../../components/Todo/Todo';
import { NotesContext } from '../../contexts/NotesProvider';
import './ListPage.css';

export default function ListPage() {
  const { notesList } = useContext(NotesContext);
  return (
    <div className="BG p-2">
      <div className="table-dark main-title">
        <h1>List</h1>
      </div>
      <div>
        {notesList.map((todo) => {
          return Todo(todo);
        })}
      </div>
    </div>
  );
}
