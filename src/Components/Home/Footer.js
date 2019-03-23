import React, { Component } from 'react'
import './Footer.css'
 
export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="global-footer container-fluid row">
                    <div className="col-lg-12 col-md-12 col-sm-12 containerCentered containerExtend">
                        <ul className="footer-main secondaryLink">
                            <li>Help</li>
                            <li>Contact</li>
                            <li>Fees</li>
                            <li>Security</li>
                            <li>Apps</li>
                            <li>Shop</li>
                           
                        </ul>
                        <hr />
                        <ul className="footer-secondary secondaryLink">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Investor Relations</li>
                            <li>Social Innovation</li>
                            <li>Public Policy</li>
                            <li>Sitemap</li>
                            <li>Enterprise</li>
                            <li>Partners</li>
                        </ul>
                        <ul className="footer-tertiary copyright-section secondaryLink">
                            <li id="footer-copyright" className="footer-copyright">© 1999–2019 </li>
                            <li id="footer-privacy">Privacy</li>
                            <li className="footer-legal">Legal</li>
                            <li id="siteFeedback" className="">Feedback</li>
                        </ul>

                    </div>
                </div>

            </div>
        )
    }
}
