import React, { Component } from 'react'
import './Header.css';
import $ from 'jquery';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';


class Header extends Component {

    personal = () => {
        $(this.refs.open).slideToggle();
        $(this.refs.business).slideUp();
    
    }

    business = () => {
        $(this.refs.business).slideToggle();
        $(this.refs.open).slideUp(); 
        
    }

    
    logout =()=>{
        this.props.startLogoutUser();
    }

    

    render() {
        return (
            <div className="row headerOut col-lg-12 col-md-12 col-sm-12">
                <div className="headerLeft col-lg-3 col-md-6 col-sm-6 ">
                    <Link to='/Home'><img src={require('./Images/logo.png')} className="img-fluid logo" alt="" /></Link>
                </div>
                <div className="li col-lg-6 ">
 
                    <li className="li1"><Link to='/personal' className="personalLink">Personal</Link></li>

                    
                    <Link to='/send'><li className="li3">Send</li></Link>
                    <li className="li4"><Link to='/request' className="personalLink">Request</Link></li>
                </div>
                <div className="buttons col-lg-3 col-md-6  col-sm-6">

                {/* {this.props.user ? 
                      <Typography variant="caption" >   
                      <Link to="" component={Button} onClick={this.logout}> Logout </Link> or <Link to={routes.ACCOUNT}> Account </Link> 
                    </Typography>
                     :
                     <Typography variant="caption" > 
                     Hi! <Link to={routes.LOGIN}> Sign in </Link> or <Link to={routes.SIGNUP}> Register </Link>
                     </Typography>
                   } */}
                    <Link to='/login' className="btnLogin">Log In</Link>
                    <Link to='/signup' className="btnSignup">Sign Up</Link>
                </div>
                <div className="personalExpand container-fluid" ref="open" id="hide">
                    <div className="personalInner container-fluid col-lg-10">

                    <li>
                            <Link to=''>
                                <div className="paypalWorks">
                                    <h6>What is PayPal?</h6>
                                    <p>Learn how PayPal works in your everyday life</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <div className="credit">
                                    <h6>PayPal Credit &amp; Cards</h6>
                                    <p>Our credit, debit, prepaid cards &amp; PayPal Credit</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <div className="manage">
                                    <h6>PayPal Can Do That</h6>
                                    <p>Discover ways to manage and move your money</p>
                                </div>

                            </Link>
                        </li>
                        <span className='xClose' onClick={this.personal}>X</span>
                        <br/>
                        
                        <li>
                            <Link to=''>
                                <div className="Check">
                                    <h6>Check Out Securely Online </h6>
                                    <p>Use your credit cards or other funds</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <div className="credit">
                                    <h6>PayPal App </h6>
                                    <p>Transfer money and track activity with our app</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <div className="manage">
                                    <h6>Shopping and More </h6>
                                    <p>Deals, gift cards and donations</p>
                                </div>

                            </Link>
                        </li>
                    
                    </div>

                </div>
                <div className="personalExpand container-fluid" ref="business" id="hide">
                <div className="personalInner container-fluid col-lg-10">

                    <li>
                            <Link to=''>
                                <div className="paypalWorks">
                                    <h6>What is PayPal?</h6>
                                    <p>Learn how PayPal works in your everyday life</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <div className="credit">
                                    <h6>PayPal Credit &amp; Cards</h6>
                                    <p>Our credit, debit, prepaid cards &amp; PayPal Credit</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <div className="manage">
                                    <h6>PayPal Can Do That</h6>
                                    <p>Discover ways to manage and move your money</p>
                                </div>

                            </Link>
                        </li>
                        <span className='xClose' onClick={this.business}>X</span>
                        <br/>
                        
                        <li>
                            <Link to=''>
                                <div className="Check">
                                    <h6>Check Out Securely Online </h6>
                                    <p>Use your credit cards or other funds</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <div className="credit">
                                    <h6>PayPal App </h6>
                                    <p>Transfer money and track activity with our app</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <div className="manage">
                                    <h6>Shopping and More </h6>
                                    <p>Deals, gift cards and donations</p>
                                </div>

                            </Link>
                        </li>
                    
                    </div>
                </div>
            </div>
        )
    }
} 


const mapStateToProps = state => ({
    user : state.user,
  })

export default connect(mapStateToProps,)(Header);