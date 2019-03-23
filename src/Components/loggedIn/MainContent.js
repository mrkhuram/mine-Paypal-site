import React, { Component } from 'react'
import './MainContent.css' 
class MainContent extends Component {
    render() {
        return (
            <div>
                <div class="mainBody">
                    <div id="summary" class="summarySection">
                        <div class="row">
                            <div class="col-sm-4 summaryModuleContainer">
                                <div class="twbs_alert vx_alert vx_alert-help txnDelayMessage js_txnDelayMessage txnDelayMessage_mobile nemo_txnDelayMessageMobile hidden">
                                    <p class="vx_alert-text">Your latest transactions may take a few minutes to show up in your activity.
                                    </p>
                                </div>
                                <section class="fiModule-container js_fiModule-container nemo_balanceModule" id="js_tourWalletModule">
                                    <div class="js_fiModule-title-container" id="fiModule-title-container">
                                        <a href="wallet/balance" class="fiModule-link vx_text-5 fiModule-title" >
                                            <span class="fiModule-title-header col-md-6 col-sm-6 col-xs-6">PayPal balance
                                            </span>
                                            
                                        </a>
                                    </div>
                                    <div class="fiModule-currency-container fiModule-currency_text">
                                        <div class="balanceNumeral nemo_balanceNumeral">
                                            <span class="numeralLabel vx_text-body_secondary balanceModule-zeroBalanceText">No balance needed to shop or send money
                                            </span>
                                        </div>
                                    </div>
                                    <ul class="fiModule-list nemo_balanceActions">
                                        <li class="addMoney dividedCellLeft vx_text-body_secondary ">
                                            <a id="addFunds" class="addFunds nemo_addFunds" href="/myaccount/home/addFunds">Add money
                                            </a>
                                        </li>
                                        <li class="withdrawMoney vx_text-body_secondary">
                                            <a  href="/myaccount/wallet/zeroBalance" class="withdrawFunds nemo_withdrawFunds" id="withdrawFunds" >
                                            Transfer to your bank
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                                <div id="payAfterDelivery" class="payAfterDelivery">
                                </div>
                                <section class="fiModule-container nemo_fiModule" id="js_tourFIModule">
                                    <h3 class="fiModule-title vx_text-5">
                                        Banks and cards
                                    </h3>
                                    <div class="js_fiModule-listView">
                                        <ul class="fiModule-list fiModule-table">
                                        </ul>
                                        <div class="fiModule-ctaText vx_text-body_secondary">
                                            <span class="fiModule-text-noFi">Pay securely with your favorite card. Get your card rewards too.
                                            </span>
                                            <div>
                                                <a href="/myaccount/wallet/" class="vx_btn vx_btn-secondary vx_btn-medium fiModule-footer_setMargin nemo_linkCard"  > Link a bank or card
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                
                                
                            </div>
                            <div class="col-sm-8 activityModuleContainer" id="js_transactionCollection">
                                
                                <section class="activityModule nemo_activityModuleNone" >
                                    <h3 id="activityModuleHeaderNone" class="vx_h5 moduleHeader nemo_activityModuleHeaderNone">
                                        Recent activity

                                        
                                    </h3>
                                    <p>Keep track of your most recent stuff here when you shop, send, or receive money.
                                    </p>
                                    <p>
                                        Don’t see a past payment? Search by date in your activity.
                                        
                                    </p>
                                    <p>Shopping for something?
                                            See places that accept PayPal.
                                    </p>
                                    <div class="footerLink">
                                   
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent
