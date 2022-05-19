import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import MyCompo from './components/MyCompo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Tkinter from './components/Tkinter';
import OtherPr from './components/OtherPr';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <div className="container my-3">
        <Route exact path="/My_Projects">
          <MyCompo/>
        </Route>
        <Switch>
          <Route path="/tk">
            <Tkinter />
          </Route>
          <Route exact path="/ot">
            <OtherPr/>
          </Route>
        </Switch>
        </div>
      </Router>
    )
  }
}