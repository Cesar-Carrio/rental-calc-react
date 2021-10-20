import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { Container } from 'react-bootstrap';
import GlobalNav from './GlobalNav';
import './App.css';
import AppContext from './AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const appContext = useState({ hello: 'click' })
  return (
    <AppContext.Provider value={appContext}>
      <Container>
        <Router>
          <header>
            <GlobalNav />
          </header>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
