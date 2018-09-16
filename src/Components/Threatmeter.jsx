import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import threatmeter from '../Assets/threat_meter.JPG';
import './App.css';

class services extends Component {
  render() {
    return (
      
        <div >
            <div className="lockgif">
          <h4> Threat Meter </h4>

            </div>
            <div >
              <img src={threatmeter} alt="meter"/>
            </div>
          

          </div>
        
    );
  }
}

export default services;
