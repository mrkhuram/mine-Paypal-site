import React, { Component } from 'react'
import './send.css'
import './send2.css'
import { Link } from 'react-router-dom'
// import SendMoney from './sendMoney'
import NavSend from './navSend'
import EasyWay from './easyWay'
import MoneyToFriends from './sendMoneyToFriends'
import DownloadApp from './downloadApp'
import ReadyToSend from './readyToSend'
import Divider from './divider'
import Carousel from 'react-bootstrap/Carousel'


export default class Send extends Component {
  render() {
    return (
      <div >
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('./Images1/banner1.jpg')}
              alt="First slide"
              style={{ height: '700px' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={require('./Images1/banner2.png')}
              style={{ height: '700px' }}
              alt="Third slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '700px' }}
              src={require('./Images1/banner3.jpg')}
              alt="Third slide"
            />


          </Carousel.Item>
        </Carousel>;
        <NavSend />
        <EasyWay />
        <Divider />
        <section id="A5" class="editorial theme-background-image-dark" data-building-block="organism">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6 editorial__container editorial__text text-xs-center text-md-left">
                <h2 class="pypl-heading pp-sans-big-light editorial__headline"><br />Send money instantly.</h2>
                <p class="editorial__paragraph">No more waiting for the mail to arrive. You can send money instantly
                  with PayPal and know that the payment is secure and your transaction is protected.</p>
                <p class="editorial__hatch-text"><br /><Link to="/sendMoney"
                  data-pa-click="Editorial1-HtchTxt-Learn-More">Learn More</Link><br /><br /></p>
              </div>
              <div class="col-md-6 hidden-sm-down text-xs-center editorial__container editorial__device-image"></div>
            </div>
          </div>
        </section>
        <section id="A6" class="editorial theme-background-color-white" data-building-block="organism">
          <div class="container">
            <div class="row">
              <div class="col-md-6 hidden-sm-down text-xs-center editorial__container editorial__device-image"></div>
              <div class="col-xs-12 col-md-6 editorial__container editorial__text text-xs-center text-md-left">
                <h2 class="pypl-heading pp-sans-big-light editorial__headline"><br />Send money internationally.</h2>
                <p class="editorial__paragraph">Sending money should be easy – even internationally. Choose from a
                  variety of convenient options for sending money to family and friends across the globe—quickly,
                  securely and at little cost.</p>
                <p class="editorial__hatch-text"><br /><br /><br /></p>
              </div>
            </div>
          </div>
        </section>
        <section id="A7" class="editorial theme-background-image-dark" data-building-block="organism">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6 editorial__container editorial__text text-xs-center text-md-left">
                <h2 class="pypl-heading pp-sans-big-light editorial__headline"><br />More easy ways to send money with
                  PayPal.</h2>
                <p class="editorial__paragraph">PayPal.Me is a fast, easy and more secure way to send money to your
                  friends and family.*</p>
                <p class="editorial__hatch-text"><br /><br /><br />
                  <span class="legal-notes">*Sender must have a PayPal account.</span></p>
              </div>
              <div class="col-md-6 hidden-sm-down text-xs-center editorial__container editorial__device-image"></div>
            </div>
          </div>
        </section>
        <MoneyToFriends />
        <section id="A14" class="panels theme-background-color-white simple-panels-accordion center"
          data-building-block="organism">
          <div class="container">
            <div class="row text-xs-center panels__header">
              <div class="col-xs-12">
                <h2 class="pypl-heading pp-sans-big-light panels__headline">Even more ways to send money and get paid
                  online.
                </h2>
              </div>
            </div>
            <div class="panels__container">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panels__panel">
                  <div class="icon-panel">
                    <div class="icon-panel__top">
                      <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/for-you/transfer-money/shared/bottom-icons-request-money.png" alt="" class="icon-panel__image" />
                      <h3 class="pypl-heading pp-sans-big-light icon-panel__headline pp-sans-small-regular h4">Request
                        Money</h3>
                      <p class="icon-panel__paragraph">Request money from friends, family and even customers using
                        PayPal – a brand you know and trust.<sup>1</sup></p>
                    </div>
                    <div class="icon-panel__bottom">
                      <p class="icon-panel__hatch-text">
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panels__panel">
                  <div class="icon-panel">
                    <div class="icon-panel__top">
                      <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/for-you/transfer-money/shared/bottom-icons-collect-money.png" alt="" class="icon-panel__image" />
                      <h3 class="pypl-heading pp-sans-big-light icon-panel__headline pp-sans-small-regular h4">Collect
                        Money</h3>
                      <p class="icon-panel__paragraph">With PayPal Money Pools, it’s easier than ever to create a page
                        for people to chip in on gifts, special events and more.<sup>1</sup></p>
                    </div>
                    <div class="icon-panel__bottom">
                      <p class="icon-panel__hatch-text"></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panels__panel">
                  <div class="icon-panel">
                    <div class="icon-panel__top">
                      <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/for-you/transfer-money/shared/bottom-icons-paypalme.png" alt="" class="icon-panel__image" />
                      <h3 class="pypl-heading pp-sans-big-light icon-panel__headline pp-sans-small-regular h4">PayPal.Me
                      </h3>
                      <p class="icon-panel__paragraph">Create and share your own link with friends and family to collect
                        money online, split a bill or get paid from clients.<sup>1</sup></p>
                    </div>
                    <div class="icon-panel__bottom">
                      <p class="icon-panel__hatch-text"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DownloadApp />
        <ReadyToSend />
        <div class="divider theme-background-color-white" id="A23">
          <div class="container">
            <div class="divider__color"></div>
          </div>
        </div>
        <section class="disclosure theme-background-color-white" data-building-block="organism" id="A24">
          <div class="container">
            <div class="row">
              <div class="col-md-12 center-block">
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