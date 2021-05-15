import React from 'react';
import NotesProvider from './contexts/NotesProvider';
import LoginPage from './Pages/Auth/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavigation from './navigation/MyNavigation';

function App() {
  return (
    <NotesProvider>
      <Router>
        <Switch>
          <Route path="/main">
            <MyNavigation />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </NotesProvider>
  );
}

export default App;
