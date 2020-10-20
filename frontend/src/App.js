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
TODO:
  - Redirect user from register and login if user already logged in:
      may need to put all route together: just make a component that determines the route.
  - Attach token into the Authentication header for all outgoing fetch requests.
  - Make sure the top nav bar changes when user is logged in.
  - Log out functionality.
  - Link user and task by looking at which user this token belongs to.
*/