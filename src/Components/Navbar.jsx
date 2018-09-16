import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navimg from '../Assets/lifesecurity.gif';
import './App.css';

class contact extends Component {
  render() {
    return (
      
        <div className="navbg">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" >
                    <img src={navimg} alt="navimage"/>
                </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                      <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active mx-sm-4">
                                          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item mx-sm-4">
                                          <a className="nav-link" href="#">About</a>
                                        </li>
                                        <li className="nav-item dropdown mx-sm-4">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Services
                                          </a>
                                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Proactive Services</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Online Request</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Traing & Awareness</a>
                                          </div>
                                        </li>
                                        <li className="nav-item mx-sm-4">
                                            <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>Advisory</a>
                                        </li>
                                        <li className="nav-item dropdown mx-sm-4">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  Career Guide
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                  <a className="dropdown-item" href="#">IS Conferences</a>
                                                  <div className="dropdown-divider"></div>
                                                  <a className="dropdown-item" href="#">IS Vacancies</a>
                                                  <div className="dropdown-divider"></div>
                                                  <a className="dropdown-item" href="#">IS Jobs</a>
                                                </div>
                                              </li>
                                        <li className="nav-item mx-sm-4">
                                            <a className="nav-link" href="#">Contact Us</a>
                                        </li>
                                        
                                      </ul>
                                      </div>
                                  </nav>
                    </div>


          
        
    );
  }
}

export default contact;
