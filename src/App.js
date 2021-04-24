import React from 'react';
// import MainPage from './Pages/MainPage';
import ListPage from './Pages/ListPage';
import NotesProvider from './contexts/NotesProvider';
import MyNavigation from './navigation/MyNavigation/MyNavigation';

function App() {
  return (
    <NotesProvider>
      <MyNavigation />
    </NotesProvider>
  );
}

export default App;
