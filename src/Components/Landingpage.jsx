import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Capture.JPG';

import Navbar from './Navbar';
import Carousel from './Carousel';
import Intro from './Intro';
import Threatmeter from './Threatmeter';
import Securityalert from './Securityalert';
import Latestalerts from './Latestalerts';
import Mailingoptions from './Mailingoptions';
import Footer from './Footer';

import './App.css';

class landingpage extends Component {
  constructor(props){
    super(props)
    this.state={
      display:true
    }
    }
    subscribe = () =>{
      this.setState({
        display:false,
      })
  }
  
  render() {
     
    let x;
    if(this.state.display){
      x=<Intro/>
    }
    else{
      <div >
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </div>
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
            
              <Link to="/"><img src={logo} alt="LogoofComcert"  /></Link>
            </div>
            <div className="col-sm-4">
              
            </div>
            <div className="col-sm-4">

            <i className="fa fa-facebook-square size"></i>
            <i className="fa fa-envelope size"> </i> 
            <i class="fa fa-tumblr-square size"></i> 
            <i class="fa fa-linkedin-square size"></i>
            <button onClick={this.subscribe} className="btn btn-danger "style={{marginLeft: '5px'}} ><i className="fa fa-thumbs-up" style={{fontsize:'30px', color:'red'}}></i>Subscribe</button>
            </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <Navbar/>

              </div>
            </div>

          

          </div>

        <div className="container-fluid extra">
        
        <div className="row">
        <div className="sm-col-12 ">
        </div>
        <br/>
        <div className="row">
        <div className="col-sm-2">
          <Threatmeter/>
                  </div>
        <div className="col-sm-6">
             {x}  
            
            
        </div>
        <div className="col-sm-4">
            <Carousel/>

        </div>
        </div>

        </div>
        <div className="row secondrow">
          <div className="col-sm-3">

            <Securityalert/>
          </div>
          <div className="col-sm-6">
          <Latestalerts/>

          </div>
          <div className="col-sm-3">
          <Mailingoptions/>

          </div>

        </div>

        //Footer
        <div className="col-sm-12 footer">
        <Footer/>
        </div>

        </div>

        </div>
    );
  }
}

export default landingpage;
