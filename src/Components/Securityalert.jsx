import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import securityalertpic from '../Assets/securityalert.JPG';
import lock from '../Assets/lock.gif';
import './App.css';

class securityalert extends Component {
  render() {
    return (
      
        <div className="container-fluid ">
        <div className="row">
            <div className="col-sm-12">
            <img src={securityalertpic} alt="Alert" style={{ width: '170px',height: '70px', marginTop: '20px', marginLeft:'20px'}}/>
            <img src={lock} alt="lock" style={{ width: '170px',height: '150px', marginTop: '5px', marginLeft:'20px'}}/>
            <Link to="/"><p style={{ border: '1px solid black',backgroundColor: '#227791',color:'white', textAlign:'center',font:'bold', width: '210px'}}>Request for online incidents</p></Link>
            </div>

        </div>
           

          </div>
        
    );
  }
}

export default securityalert;
