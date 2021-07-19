import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Allpatients from './components/AllPatients/AllPatients/Allpatients';
import AddDoctor from './components/AddDoctor/AddDoctor';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
      {/* <p>Name:{loggedInUser.name}</p> */}
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/allPatients">
              <Allpatients></Allpatients>
            </Route>
            <Route path="/addDoctor">
              <AddDoctor></AddDoctor>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
