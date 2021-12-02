import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import {
  Home,
  Login,
  MovieDetail
} from "./pages";

function App() {

  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/movies/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
