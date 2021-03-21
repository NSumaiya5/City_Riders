import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { createContext, useState } from 'react';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Destination from './Component/Destination/Destination';
import NoMatch from './Component/NoMatch/NoMatch';

import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Reserved from './Component/Reserved/Reserved';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
      <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/destination/:vehicleName/:id">
            <Destination></Destination>
          </PrivateRoute>
          

           
          <PrivateRoute path="/destination">
          <Destination></Destination>
          </PrivateRoute>

          <PrivateRoute path="/reserved/:id">
          <Reserved></Reserved>
          </PrivateRoute>
  
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
           <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;