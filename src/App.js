import React, { useEffect } from 'react';
import NotesProvider from './contexts/NotesProvider';
import MyNavigation from './navigation/MyNavigation/MyNavigation';
import LoginPage from './Pages/Auth/LoginPage';

function App() {
  function isLoggedIn() {
    const token = localStorage.getItem('auth.token');
    return token;
  }

  return (
    <NotesProvider>
      {!isLoggedIn() ? <LoginPage /> : <MyNavigation />}
    </NotesProvider>
  );
}

export default App;
