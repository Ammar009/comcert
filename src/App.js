import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Landingpage from './Components/Landingpage';
import About from './Components/About';
import Advisory from './Components/Advisory';
import Careerguide from './Components/Careerguide';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Admin from './Components/Admin';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route path ="/" exact component={Landingpage}/ >

          <Route path ="/admin" exact component={Admin}/ >

          <Route path ="/about" exact component={About}/ > 
          
          <Route path ="/advisory" exact component={Advisory}/ > 
          
          <Route path ="/careerguide" exact component={Careerguide}/ > 
          
          <Route path ="/contact" exact component={Contact}/ > 
          
          <Route path ="/services" exact component={Services}/ > 
 
          

          </div>
        </Router>
    );
  }
}

export default App;
