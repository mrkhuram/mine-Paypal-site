import React, { Component } from 'react'
import './request.css'
import NavSend from '../Send/navSend'
import Divider from '../Send/divider'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'

export default class Request extends Component {
    render() {
        return (
            <div>
            <Carousel className="carousel">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('./Images1/banner1.jpg')}
                                alt="First slide"
                                style={{height: '700px'}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src={require('./Images1/banner2.png')}
                                style={{height: '700px'}}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{height: '700px'}}
                                src={require('./Images1/banner3.jpg')}
                                alt="Third slide"
                            />
 

                        </Carousel.Item>
                    </Carousel>;
                <NavSend />

                <section id="A4" className="panels theme-background-color-white simple-panels-accordion center" data-building-block="organism">
                    <div className="container">
                        <div className="row text-xs-center panels__header">
                            <div className="col-xs-12">
                                <h2 className="pypl-heading pp-sans-big-light panels__headline">Requesting money has never been easier.</h2>
                            </div>
                        </div>
                        <div className="panels__container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panels__panel">
                                    <div className="icon-panel">
                                        <div className="icon-panel__top">
                                            <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/for-you/transfer-money/shared/icon-security.png" alt="" className="icon-panel__image" />
                                            <h3 className="pypl-heading pp-sans-big-light icon-panel__headline pp-sans-small-regular h4">Security</h3>
                                            <p className="icon-panel__paragraph">Fraud protection, 24/7 monitoring &amp; secure encryption technology make requesting money with PayPal a less stressful transaction.</p>
                                        </div>
                                        <div className="icon-panel__bottom">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panels__panel">
                                    <div className="icon-panel">
                                        <div className="icon-panel__top">
                                            <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/for-you/transfer-money/shared/icon-no-fee.png" alt="" className="icon-panel__image" />
                                            <h3 className="pypl-heading pp-sans-big-light icon-panel__headline pp-sans-small-regular h4">No cost to request</h3>
                                            <p className="icon-panel__paragraph">No cost when requesting money from friends and family online with PayPal, making it easier than ever to get paid back.</p>
                                        </div>
                                        <div className="icon-panel__bottom">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panels__panel">
                                    <div className="icon-panel">
                                        <div className="icon-panel__top">
                                            <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/for-you/transfer-money/shared/icon-instant-access.png" alt="" className="icon-panel__image" />
                                            <h3 className="pypl-heading pp-sans-big-light icon-panel__headline pp-sans-small-regular h4">Instant access</h3>
                                            <p className="icon-panel__paragraph">When you receive money online with PayPal, funds go quickly into your PayPal account and can be spent or withdrawn immediately.</p>
                                        </div>
                                        <div className="icon-panel__bottom">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Divider />
                <section id="A5" className="editorial theme-background-image-dark" data-building-block="organism"><div className="container"><div className="row"><div className="col-xs-12 col-md-6 editorial__container editorial__text text-xs-center text-md-left"><h2 className="pypl-heading pp-sans-big-light editorial__headline"><br />Everyday payments have never been easier.</h2><p className="editorial__paragraph">Easily request money or payments from friends or clients with PayPal and knock those everyday little tasks off your list. </p><p className="editorial__hatch-text"><br /></p></div><div className="col-md-6 hidden-sm-down text-xs-center editorial__container editorial__device-image"></div></div></div></section>

                <section id="A6" className="editorial theme-background-color-white" data-building-block="organism"><div className="container"><div className="row"><div className="col-md-6 hidden-sm-down text-xs-center editorial__container editorial__device-image"></div><div className="col-xs-12 col-md-6 editorial__container editorial__text text-xs-center text-md-left"><h2 className="pypl-heading pp-sans-big-light editorial__headline"><br />Simplify gifting for friends &amp; family.

                </h2><p className="editorial__paragraph">No more worrying about checks getting lost in the mail or arriving late. Request money online to reduce stress and hassle.</p><p className="editorial__hatch-text"><br /></p></div></div></div></section>


                <section id="A7" className="editorial theme-background-image-dark" data-building-block="organism">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 editorial__container editorial__text text-xs-center text-md-left">
                                <h2 className="pypl-heading pp-sans-big-light editorial__headline">
                                    <br />PayPal.Me</h2>
                                <p className="editorial__paragraph">Create and share your own link with friends and family to receive money online, split a bill or get paid from clients.<sup>1</sup></p>
                                <p className="editorial__hatch-text"><br />
                                    <br />
                                </p>
                            </div>
                            <div className="col-md-6 hidden-sm-down text-xs-center editorial__container editorial__device-image">
                            </div>
                        </div>
                    </div>
                </section>

                <section id="A9" className="panels theme-background-color-blue center" data-building-block="organism">
                    <div className="container">
                        <div className="row text-xs-center panels__header">
                            <div className="col-xs-12">
                                <h2 className="pypl-heading pp-sans-big-light panels__headline">Request money from friends and family in the U.S.
                </h2>
                            </div>
                        </div>
                        <div className="panels__container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 panels__panel">
                                    <div className="no-image-panel">
                                        <div className="no-image-panel__top">
                                            <h3 className="pypl-heading pp-sans-big-light no-image-panel__headline pp-sans-small-regular h4">
                                                <font size="6"><sup>$</sup></font>
                                                <font size="7">0</font><br />transaction fees within the US.
                      </h3>
                                            <p className="no-image-panel__paragraph">When sending money to friends and family from a linked bank
                        account or PayPal balance.</p>
                                        </div>
                                        <div className="no-image-panel__bottom"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 panels__panel">
                                    <div className="no-image-panel">
                                        <div className="no-image-panel__top">
                                            <h3 className="pypl-heading pp-sans-big-light no-image-panel__headline pp-sans-small-regular h4">
                                                <font size="7">2.9</font>
                                                <font size="6"><sup>%</sup></font><br />per transaction within the US.
                      </h3>
                                            <p className="no-image-panel__paragraph">When using a credit or debit card, or PayPal Credit.</p>
                                        </div>
                                        <div className="no-image-panel__bottom"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panels__footer row">
                            <div className="col-xs-12">
                                <p className="text-xs-center legal-notes"><br /></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="A14" className="panels theme-background-color-white simple-panels-accordion center" data-building-block="organism">
                    <div className="container">
                        <div className="row text-xs-center panels__header">
                            <div className="col-xs-12">
                                <h2 className="pypl-heading pp-sans-big-light panels__headline">Even more ways to send money and get paid online.</h2>
                            </div>
                        </div>
                        <div className="panels__container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panels__panel">
                                    <div className="icon-panel">
                                        <div className="icon-panel__top">
                                            <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/for-you/transfer-money/shared/bottom-icons-send-money.png" alt="" className="icon-panel__image" />
                                            <h3 className="pypl-heading pp-sans-big-light icon-panel__headline pp-sans-small-regular h4">Send Money</h3>
                                            <p className="icon-panel__paragraph">Send money securely to friends and family around the world.<sup>1</sup></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panels__panel">
                                    <div className="icon-panel">
                                        <div className="icon-panel__top">
                                            <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/for-you/transfer-money/shared/bottom-icons-collect-money.png" alt="" className="icon-panel__image" />
                                            <h3 className="pypl-heading pp-sans-big-light icon-panel__headline pp-sans-small-regular h4">Collect Money</h3>
                                            <p className="icon-panel__paragraph">With PayPal Money Pools, it’s easier than ever to create a page for people to chip in on gifts, special events and more.<sup>1</sup>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 panels__panel">
                                    <div className="icon-panel">
                                        <div className="icon-panel__top">
                                            <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/for-you/transfer-money/shared/bottom-icons-paypalme.png" alt="" className="icon-panel__image" />
                                            <h3 className="pypl-heading pp-sans-big-light icon-panel__headline pp-sans-small-regular h4">PayPal.Me</h3>
                                            <p className="icon-panel__paragraph">Create and share your own link with friends and family to collect money online, split a bill or get paid from clients.<sup>1</sup>
                                            </p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pullout theme-background-image-light" id="A101" data-building-block="organism">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-lg-8 text-xs-center text-md-left">
                                <h2 className="pypl-heading pp-sans-big-light pullout__headline">Download the App.</h2>
                                <p className="pullout__paragraph pp-sans-big-light">The improved PayPal mobile app is the secure way to
                  send, <br />receive, and access your money from almost anywhere.</p>
                                <div>
                                    <a href="https://app.adjust.com/vlx5gy" data-pa-click="AppBadge-badge-apple"
                                    className="app-badge app-badge--apple"><span className="sr-only">apple</span></a>
                                    <a
                                        href="https://app.adjust.com/vxullh" data-pa-click="AppBadge-badge-google"
                                        className="app-badge2 app-badge--google">
                                        <span className="sr-only">google</span></a>
                                        </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pullout theme-background-color-white" id="A11" data-building-block="organism">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-lg-10 center-block text-xs-center">
                                <h2 className="pypl-heading pp-sans-big-light pullout__headline">Ready to request money?</h2>
                                <p className="pullout__paragraph pp-sans-big-light">Sign up to request money to family and friends across the
                  globe quickly, securely and at little cost.</p>
                  <Link
                                    to='/login' target="_self"
                                    className="pypl-btn mpp-btn pullout__btn pullout__btn--center pypl-btn--blue" data-pa-click="Pullout-Prmrycta-ClsngCTA-PrmryCTA-Send Money" role="button">Request Money
                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider theme-background-color-white" id="A23">
                    <div className="container">
                        <div className="divider__color"></div>
                    </div>
                </div>


                <section className="disclosure theme-background-color-white" data-building-block="organism" id="A24">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 center-block">
                                <div>
                                    <p><sup>1</sup>PayPal account required to send and receive money using the PayPal app, Money Pools and
                    PayPal.Me.</p>
                                    <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries.
                    App Store is a service mark of Apple Inc., registered in the U.S. and other countries.</p>
                                    <p>Google Play and the Google Play logo are trademarks of Google, LLC.</p>
                                    <p>All trademarks and brand names belong to their respective owners. Use of these trademarks and brand
                    names do not represent endorsement by or association with PayPal. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}
