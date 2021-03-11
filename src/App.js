import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path ="/team/:idTeam">
          <TeamDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
