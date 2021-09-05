import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import './App.css';
import FriendsList from "./components/FriendsList";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Route exact path='/' component={LoginForm} />
            <PrivateRoute path='/friendsList' component={FriendsList}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
