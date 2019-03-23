import React, { Component } from 'react'
import './personal.css'
import NavPersonal from './navPersonal'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
class Personal extends Component {
    render() {
        return (
            <div>
                <Carousel className="carousel">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('./Images/banner1.jpg')}
                                alt="First slide"
                                style={{height: '700px'}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src={require('./Images/banner2.png')}
                                style={{height: '700px'}}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{height: '700px'}}
                                src={require('./Images/banner3.jpg')}
                                alt="Third slide"
                            />
 

                        </Carousel.Item>
                    </Carousel>;
                <NavPersonal />
                <section className="row-fluid row pullout center-text white p1" id="overview">
                    <div className="containerCentered container">
                        <div className="center-block span10 col-lg-12 col-md-12">
                            <h2 className="pulloutHeadline ">Speed through checkout on millions of sites.</h2>
                            <p className="pulloutPara">Buy from merchants all over the world. Our online payment services are available in over 200 markets globally and can convert your payment to 25 currencies. No matter the online payment method, your money goes farther with PayPal.</p>
                        </div>
                    </div>
                </section>

                <section className="custom-logos">
                    <div className="row-fluid">
                        <div className="row-fluid ">
                            <div className="containerCentered">
                                <i className="appslogos bestbuy"><span className="accessAid">best buy</span></i>
                                <i className="appslogos diapers"><span className="accessAid">diapers.com</span></i>
                                <i className="appslogos ebay"><span className="accessAid">ebay</span></i>
                                <i className="appslogos hotwire"><span className="accessAid">hotwire</span></i>
                                <i className="appslogos levis"><span className="accessAid">levis</span></i>
                                <i className="appslogos newegg"><span className="accessAid">newegg</span></i>
                                <i className="appslogos nike"><span className="accessAid">nike</span></i>
                                <i className="appslogos overstock"><span className="accessAid">overstock</span></i>
                                <i className="appslogos target"><span className="accessAid">target</span></i>
                                <i className="appslogos travelocity"><span className="accessAid">travelocity</span></i>
                                <i className="appslogos ulta"><span className="accessAid">ulta</span></i>
                                <i className="appslogos walmart"><span className="accessAid">walmart</span></i>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="steps-section row-fluid light row " id="howItWorks">

                    <div className="containerCentered containerExtend">
                        <div className="span4 steps col-sm-12">
                            <p className="circle">1</p>
                            <p className="step-text">Create a PayPal account and securely link your bank, credit, and debit card details.</p>
                        </div>
                        <div className="span4 steps col-sm-12">
                            <p className="circle">2</p>
                            <p className="step-text">When you check out online at millions of sites, just look for the PayPal button to use PayPal as your online payment solution.</p>
                        </div>
                        <div className="span4 steps col-sm-12">
                            <p className="circle">3</p>
                            <p className="step-text">Log into PayPal and speed through checkout securely with just an email and password.</p>
                        </div>
                    </div>


                </section>

                <section className="row row-fluid editorial editorial-right editorial-bg n4 lightContent " id="navTest">
                    <div className="parallax-bg scroll-animate" data-translate-y-start="-20" data-translate-y-end="60"></div>
                    <div className="container containerCentered">
                        <div className="col-sm-6 span6 editorial-container editorial-text">
                            <div className="editorial-cell">
                                <h2 className="h3 large">Pay your way.</h2>
                                <p className="contentPara">It's easy to add credit, debit, and bank accounts to your digital wallet. Then when you click the PayPal button at checkout, you can choose any of them and skip entering your financial information.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row-fluid row pullout center-text white p2" id="purchaseProtection">
                    <div className="containerCentered container">
                        <div className="center-block span11">
                            <h2 className="pulloutHeadline ">We've got your back with Purchase Protection.</h2>
                            <p className="pulloutPara">If a purchase doesn’t show up, gets damaged in transit, or is significantly different than it was described online, don’t worry. If your purchase is eligible, we’ve got you covered. We’ll refund your money most of the time and deal with merchants so you don't have to.</p>
                        </div>
                    </div>
                </section>
                <div className="containerCentered"><hr /></div>

                <section className="row-fluid row pullout center-text blue reverseLink c1">
                    <div className="containerCentered container">
                        <div className="center-block span9">
                            <h2 className="pulloutHeadline ">Checkouts are as fast as One Touch<sup className="sup-headline">TM</sup>.</h2>
                            <p className="pulloutPara">When you pay with PayPal, you'll have the option to allow One Touch<sup>TM</sup> payments online for quicker purchases. When One Touch<sup>TM</sup> is enabled, you can check out on thousands of participating sites without having to re-enter your password or PIN for up to six months. So keep shopping, and go with the flow.</p>
                            <span aria-hidden="true" id="onetouch"></span>
                        </div>
                    </div>
                </section>

                <section className="closing-section row-fluid panel center-text light">
                    <div className="containerCentered">
                        <div className="span12">
                            <p className="closingHeadline headline large">More secure shopping starts here.</p>
                            <Link className="btn closing-cta center-block  signup-post-done scTrack:closing-cta|signup-for-free" to="/signup">Sign Up for Free</Link>
                        </div>
                    </div>

                </section>



            </div>
        )
    }
}
export default Personal;