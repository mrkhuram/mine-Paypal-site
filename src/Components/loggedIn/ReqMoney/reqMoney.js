import React, { Component } from 'react'
import HeaderOf from '../Header'
import './reqMoney.css'
import {Link } from 'react-router-dom'
class ReqMoney extends Component {
    render() {
        return (
            <div> 
                <HeaderOf />
                <div class="vx_foreground-container row foreground-container">
                <div id="contents" class="contents vx_mainContent">
                    <section class="mainContents row transfer " id="transfer">
                        <div id="react-transfer-container">
                            <div class="react-p2p_wrapper">
                                <div class="p2p-funnel nemo_p2pFunnel funnel_3">
                                    <div class="block block_links">
                                        <div class="funnel-wrapper funnel-wrapper_links">
                                            <div class="link-wrapper before-protection-plan">
                                                <div class="link-box col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <Link id="nemo_sendLink" class="link-box-link" to="/useraccount/sendMoney">
                                                        <div class="icon-wrapper">
                                                            <img src={require('./sendMoney.PNG')} class="icon " alt=""/>
                                                        </div>
                                                        <div class="text-wrapper">
                                                            <p class="link-title vx_text-3_lighter">
                                                                <span>Send money to friends and family</span>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <div class="message-wrapper">
                                                        <div class="message-text message-text_send">
                                                            <span>
                                                            </span>
                                                            <span class="link-description link-description vx_text-6_lighter">
                                                                It's free in the US when you use bank or balance.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="link-wrapper protection-plan  col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                
                                                <div class="protection-plan-link-wrapper">
                                                    
                                                    <div class="link-box protection-plan">
                                                        <Link id="nemo_requestLink" class="link-box-link" to="/useraccount/reqMoney">
                                                            <div class="icon-wrapper">
                                                                
                                                            <img src={require('./reqMoney.PNG')} class="icon icon-request-money" alt=""/>

                                                            </div>
                                                            <div class="text-wrapper">
                                                                <p class="link-title vx_text-3_lighter">
                                                                    Request money
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidepanel fundingOptions animated">
                        </div>
                    </section>
                </div>

            </div>
            </div>
        )
    }
}

export default ReqMoney
