import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import TodoList from './main/Todo';
import Login from './accounts/login';
import Register from './accounts/register';
import Header from './header';
import { auth } from './authentication/auth';

function App(props)
{
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
            {auth.isAuthenticated? <TodoList/>: <Redirect to="/login"/>}
        </Route>
        <Route exact path="/register" >
          {() => authenticatedRedirect(<Register />)}
        </Route>
        <Route exact path="/login">
          {() => authenticatedRedirect(<Login />)}
        </Route>
      </Switch>
    </Router>
    
  )
}

function authenticatedRedirect(Component)
{
  if (auth.isAuthenticated)
  {
    return <Redirect to="/"/>;
  }
  return Component;
}


export default App;




/*
things not implemented: Logout, Filter tasks from API side, change nav bar when logged in.
Things implemented: Login, redirect when logged in, when not logged in, CRUD for tasks.
*/