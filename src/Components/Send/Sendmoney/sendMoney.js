import React, { Component } from 'react'
import Banner from './banner'
import NavSend from '../navSend'
import EasyWay from '../easyWay'
import Divider from '../divider'
import './sendMoney.css'
import SendMoneyToFriends from '../sendMoneyToFriends'
export default class SendMoney extends Component {
  render() {
    return (
      <div>
        <Banner />
        <NavSend />
        <EasyWay />
        <Divider />
        <section id="A52" class="editorial2 theme-background-color-white2" data-building-block="organism">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6 editorial__container2 editorial__text2 text-xs-center2 text-md-left2">
                <h2 class="pypl-heading2 pp-sans-big-light2 editorial__headline2">
                  <br />
                  No transaction fees required.
                </h2>
                <p class="editorial__paragraph2">When you transfer or send money in the U.S.
                  using your PayPal balance or linked bank account, you won’t get hit with unnecessary transaction fees.</p>
              </div>
              <div class="col-md-6 hidden-sm-down2 text-xs-center2 editorial__container2 editorial__device-image2" >
              </div>
            </div>
          </div>
        </section>
        <section id="A62" class="editorial2 theme-background-image-light2">
        <div class="container2">
        <div class="row">
        <div class="col-md-6 hidden-sm-down2 text-xs-center2 editorial__container2 editorial__device-image2">
        </div>
          <div class="col-xs-12 col-md-6 editorial__container2 editorial__text2 text-xs-center2 text-md-left2">
            <h2 class="pypl-heading2 pp-sans-big-light2 editorial__headline2">
              <br />Access your PayPal balance instantly.</h2>
            <p class="editorial__paragraph2">You can access your PayPal balance funds to make payments right away or transfer it to your bank account in (typically) less than 30 minutes.*</p>
            <p class="editorial__hatch-text2">
              <br />
              <font size="2" class="legal-notes2">*Transfers typically occur in minutes, up to 30 minutes and vary by bank. Eligible debit cards only. Fees, limits and other holds may apply.</font>
              <br />
              <br />
            </p>
          </div>
        </div>
        </div>
        </section>
        <section id="A72" class="editorial2 theme-background-color-white2" data-building-block="organism">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6 editorial__container2 editorial__text2 text-xs-center2 text-md-left2">
                <h2 class="pypl-heading2 pp-sans-big-light2 editorial__headline2">
                  <br />Meet the PayPal Cash Card.
                </h2>
                <p class="editorial__paragraph2">Instantly access your PayPal balance with the PayPal Cash Card.
                    Use it to shop online or in-stores everywhere Mastercard<sup>®</sup> is accepted.
                    Plus, you can make cash withdrawals from ATMs<sup>1</sup> worldwide.
                    Or, with your PayPal account, you can send money online to friends and family<sup>2</sup>.
                        
                <br />
                  <br />
                 
                  </p>
                  </div>
                  <div class="col-md-6 hidden-sm-down2 text-xs-center2 editorial__container2 editorial__device-image2">
              </div>
            </div>
          </div>
        </section>
        <SendMoneyToFriends />
      </div>

    )
  }
}
