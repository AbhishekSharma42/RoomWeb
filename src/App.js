// import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import MainSite from './componets/MainSite';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './componets/About';

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <MainSite heading="Enter the text to analyze below" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
