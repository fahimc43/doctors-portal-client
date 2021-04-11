import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact to="/">
              <Home></Home>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
