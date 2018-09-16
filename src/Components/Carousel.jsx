import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import finance from '../Assets/finance.jpg';
import borderagency from '../Assets/borderagency.png';
import education from '../Assets/education.jpg';
import './App.css';

class carousel extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">

        <div className=" col-sm-12 carousel_size">
            <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                          <li data-target="#demo" data-slide-to="0" class="active"></li>
                          <li data-target="#demo" data-slide-to="1"></li>
                          <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={finance} alt="Finance" />
                            <div className="carousel-caption">
                              <h3>Finance</h3>
                              <p>To Protect Nation from Financial cyber threats</p>
                            </div>   
                          </div>
                          <div className="carousel-item">
                            <img src={borderagency} alt="BorderAgency"/>
                            <div className="carousel-caption">
                              <h3>BorderAgency</h3>
                              <p>Save our country from foreign threats</p>
                            </div>   
                          </div>
                          <div className="carousel-item">
                            <img src={education} alt="Education" />
                            <div className="carousel-caption">
                              <h3>Education</h3>
                              <p>Protection against Educational threats..</p>
                            </div>   
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                          <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                          <span className="carousel-control-next-icon"></span>
                        </a>
                      </div>
                      </div>
                      </div>
                      </div>       
    );
  }
}

export default carousel;


