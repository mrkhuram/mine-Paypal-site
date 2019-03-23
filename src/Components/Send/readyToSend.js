import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ReadyToSend extends Component {
  render() {
    return (
      <div>
        <section class="pullout theme-background-color-white" id="A11" data-building-block="organism">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-lg-10 center-block text-xs-center">
                <h2 class="pypl-heading pp-sans-big-light pullout__headline">Ready to send money?</h2>
                <p class="pullout__paragraph pp-sans-big-light">Sign up to send money to family and friends across the
                  globe quickly, securely and at little cost.</p><Link
                  to="/signup" t
                  className="pypl-btn mpp-btn pullout__btn pullout__btn--center pypl-btn--blue">Send Money
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
