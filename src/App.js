import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { Container } from 'react-bootstrap';
import GlobalNav from './GlobalNav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
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
  );
}

export default App;
