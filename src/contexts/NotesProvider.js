import React, { useEffect, useState } from 'react';
import API_SERVICES from '../services/api';

export const NotesContext = React.createContext(null);

function NotesProviderComponent({ children }) {
  const [count, setCount] = useState(0);
  const [notesList, setNotesList] = useState([]);

  const loadNotesList = async () => {
    const result = await API_SERVICES.getNotesListAsync();
    setNotesList(result);
  };

  useEffect(() => {
    loadNotesList();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        title: 'myTitle',
        setCount: setCount,
        count: count,
        notesList: notesList,
      }}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProviderComponent;
