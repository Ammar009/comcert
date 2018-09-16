import React, { Component } from 'react';
import './App.css';
import logo from '../Assets/logorevised.png';
import { Link } from 'react-router-dom';

class admin extends Component {
    render() {
        return (


            <div className="container">
            <div className="row">
                <div className="col-sm-3">

                </div>
                <div className="col-sm-6">
                <Link to="/"><img src={logo} alt="logo" style={{width: '300px', height: '220px', marginLeft: '100px'}}/></Link>
                </div>
                <div className="col-sm-3">

                </div>
            </div>
                
                
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6"><h2 align="center" className="signin">==Admin Panel==</h2></div>
                    <div className="col-md-3"></div>
                </div>



                <div className="row rowpad">
                    <div className="col-md-4"></div>

                    <div className="col-md-4">
                        <label align="center" className="name">Email or Username:</label>
                    </div>
                    <div className="col-md-4"></div>

                </div>


                <div className="row">
                    <div className="col-md-4"></div>

                    <div className="col-md-4">
                        <input type="text" align="center" className="boader" id="email" placeholder="Email or Username:" name="email" size="35" />
                    </div>
                    <div className="col-md-4"></div>

                </div>
                <div className="row rowpad">
                    <div className="col-md-4"></div>

                    <div className="col-md-4">
                        <label align="center" className="name">Password:</label>
                    </div>
                    <div className="col-md-4"></div>

                </div>

                <div className="row">
                    <div className="col-md-4"></div>

                    <div className="col-md-4">
                        <input type="text" align="center" className="boader" id="email" placeholder="Password"
                               name="password" size="35"/>
                    </div>
                    <div className="col-md-4"></div>

                </div>

                                   <div className="row rowpad">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" align="center"><button className="btn signUpBtn" type="submit">Login</button>
                        </div>

                    <div className="col-md-4"></div>
                </div>




                <div className="row rowpad">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" align="center"><h3 className="Forgot"> By clicking Sign Up, you agree to our
                        Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at
                        any time</h3></div>

                    <div className="col-md-4"></div>
                </div>
                <div className="row signinpad">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" align="center">
                    {/* <Link to='/basicaccount'>
                    <img src={signin} alt="signin"/>
                    </Link> */}
                    </div>
                    <div className="col-md-4"></div>
                </div>


                <div className="row rowpad">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" align="center"><a href="forgotpassword.html"><h3
                        className="Forgot"> Forgot your Password? </h3></a>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <hr className="line" />
                    <div className="row rowpad">
                        <div className="col-md-4"></div>
                        <div className="col-md-4" align="center"><h3 className="Forgot"> Need an account?</h3>
                            <Link to='/sigmupa'><h3 className="Forgot"> Join <b>COMCERT</b> for free </h3></Link>
                        </div>

                        <div className="col-md-4"></div>
                    </div>


            </div>
        );
    }
}

export default admin;