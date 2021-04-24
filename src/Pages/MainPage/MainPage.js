import React, { useState, useContext, useEffect } from 'react';
import Counter from '../../components/Counter';
import Message from '../../components/Message/Message';
import Theme from '../../components/Theme/Theme';
import { NotesContext } from '../../contexts/NotesProvider';
import './MainPage.css';

export default function MainPage() {
  const { title, setCount, count } = useContext(NotesContext);

  return (
    <>
      <div className="BG p-2">
        <div className="table-dark main-title">
          <h1>{title}</h1>
        </div>
        <Message message="Welcome!" desc="How is your day?" />
        <Counter />
        <Theme counterValue={count} />
      </div>
    </>
  );
}
