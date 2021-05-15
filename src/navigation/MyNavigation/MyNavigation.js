import React, { useState } from 'react';
import ListPage from '../../Pages/ListPage';
import MainPage from '../../Pages/MainPage';
import './MyNavigation.css';

function MyNavigation() {
  const [page, setCurrentPage] = useState('home');

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
              console.log('Logged Out');
            }}
            className={`m-2 btn ${page === 'list' ? 'btn-danger' : ''}`}>
            Log Out
          </button>
        </header>
      </div>
      {page === 'home' ? <MainPage /> : <ListPage />}
    </div>
  );
}

export default MyNavigation;
