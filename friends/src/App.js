import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path='/'>
              <LoginForm />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
