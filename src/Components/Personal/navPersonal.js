import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class NavSend extends Component {
  render() {
    return (
      <div>
        <section id="A17" data-building-block="organism" className="in-page-anchors">
          <nav className="in-page-anchors__nav">
            <div className="in-page-anchors__container">
              <div className="in-page-anchors__flex-wrapper">
                <div className="in-page-anchors__links-container">
                  <ul className="in-page-anchors__link-list">
                    <li className="in-page-anchors__li">
                    <Link className="in-page-anchors__link in-page-anchors__link--underline"
                        to="#A4"  >Overview</Link></li>
                    <li className="in-page-anchors__li">
                    <Link className="in-page-anchors__link in-page-anchors__link--underline"
                        to="#A5"  >How it Works</Link></li>
                    <li className="in-page-anchors__li">
                    <Link className="in-page-anchors__link in-page-anchors__link--underline"
                        to="#A9"  >Purchase Protection</Link></li>
                    {/* <li className="in-page-anchors__li">
                    <Link className="in-page-anchors__link in-page-anchors__link--underline"
                        to="#A10"  >PayPal App</Link></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <div className="divider theme-background-color-white" id="">
            <div className="container">
              <div class="divider__color"></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
