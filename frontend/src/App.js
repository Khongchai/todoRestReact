import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import TodoList from './main/Todo';
import Login from './accounts/login';
import Register from './accounts/register';
import Header from './header';
import {redirectTo} from './authentication/PrivateRoute';

function App(props)
{
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
            {redirectTo() ? <Route component={TodoList}/> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
    
  )
}
export default App;




/*
TODO:
  - Attach token into the Authentication header for all outgoing fetch requests.
  - Make sure the top nav bar changes when user is logged in.
  - Log out functionality.
*/