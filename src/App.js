import React from 'react';
import NotesProvider from './contexts/NotesProvider';
import MyNavigation from './navigation/MyNavigation/MyNavigation';
import LoginPage from './Pages/Auth/LoginPage';

function App() {
  return (
    <NotesProvider>
      <LoginPage />
    </NotesProvider>
  );
}

export default App;
