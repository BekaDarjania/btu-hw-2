import React, { useEffect, useState } from 'react';
import ListPage from '../../Pages/ListPage';
import MainPage from '../../Pages/MainPage';
import './MyNavigation.css';
import { useHistory } from 'react-router-dom';

function MyNavigation() {
  const [page, setCurrentPage] = useState('home');
  let history = useHistory();

  // check for auth
  useEffect(() => {
    const token = localStorage.getItem('auth.token');
    if (!token) {
      history.replace('/');
    }
  });

  return (
    <div>
      <div>
        <header className="headerBG">
          <button
            onClick={() => setCurrentPage('home')}
            className={`m-2 btn ${page === 'home' ? 'btn-danger' : ''}`}>
            Home
          </button>
          <button
            onClick={() => setCurrentPage('list')}
            className={`m-2 btn ${page === 'list' ? 'btn-danger' : ''}`}>
            Lists
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('auth.token');
              history.replace('/');
            }}
            className={`m-2 btn`}>
            Log Out
          </button>
        </header>
      </div>
      {page === 'home' ? <MainPage /> : <ListPage />}
    </div>
  );
}

export default MyNavigation;
