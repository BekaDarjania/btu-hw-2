import React from 'react';
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
