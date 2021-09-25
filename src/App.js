
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
// import { Router } from 'react-router';
// import React from "react";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import React, { Component } from 'react'

export default class App extends Component
 {
  pageSize = 5;

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>

        <Router>
          <NavBar />
          <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />

          <Switch>
            <Route exact path="/Sports"><News  setProgress={this.setProgress} key="Sports" pageSize={5} country="in" category="Sports" /></Route>
            <Route exact path="/Entertainment"><News  setProgress={this.setProgress}  key="Entertainment" pageSize={5} country="in" category="Entertainment" /></Route>
            <Route exact path="/Health"><News apiKey={this.apiKey} setProgress={this.setProgress}   key="Health" pageSize={5} country="in" category="Health" /></Route>
            <Route exact path="/Technology"><News  apiKey={this.apiKey}setProgress={this.setProgress}  key="Technology" pageSize={5} country="in" category="Technology" /></Route>
            <Route exact path="/General"><News apiKey={this.apiKey}  setProgress={this.setProgress}  key="General" pageSize={5} country="in" category="general" /></Route>
            <Route exact path="/Science"><News   apiKey={this.apiKey} setProgress={this.setProgress}  key="Science" pageSize={5} country="in" category="Science" /></Route>
            <Route exact path="/Business"><News apiKey={this.apiKey} setProgress={this.setProgress}  key="Business" pageSize={5} country="in" category="Business" /></Route>
          </Switch>


        </Router>);



      </div>
    )
  }

}

// export default App;
