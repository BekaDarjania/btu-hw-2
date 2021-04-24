import React, { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../contexts/NotesProvider';
import './Counter.css';

export default function Counter() {
  const { count, setCount } = useContext(NotesContext);

  // useEffect(() => {
  //   console.log('start');
  // }, [count]);

  function add(value) {
    setCount(count + value);
  }

  return (
    <div className="Counter table-dark mt-2">
      <h2>Counter</h2>
      <div className="row-7">
        <button
          onClick={() => add(-100)}
          className="col-sm-1 btn btn-danger m-1">
          -100
        </button>
        <button onClick={() => add(-5)} className="col-sm-1 btn btn-danger m-1">
          -5
        </button>
        <button onClick={() => add(-1)} className="col-sm-1 btn btn-danger m-1">
          -1
        </button>
        <h3 className="btn-group-vertical m-4">{count}</h3>
        <button onClick={() => add(1)} className="col-sm-1 btn btn-success m-1">
          +1
        </button>
        <button onClick={() => add(5)} className="col-sm-1 btn btn-success m-1">
          +5
        </button>
        <button
          onClick={() => add(100)}
          className="col-sm-1 btn btn-success m-1">
          +100
        </button>
      </div>
    </div>
  );
}
