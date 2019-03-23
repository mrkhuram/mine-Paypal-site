import React, { Component } from 'react'
import './content.css'
import $ from 'jquery'
import MainContent from './MainContent'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Content extends Component {

    componentDidMount() {
      console.log(this.props.user.name)
    }
    

    closeContent = () => {
        $(this.refs.emailClose).slideUp();
    }

    render() {
        return (
            <div>
                <div id="js_engagementModuleView" className="engagementModule nemo_engagementModule">
                    <div className="engagementMainBar-container js_engagementMainBar-container">
                        <div className="summarySection engagementMainBar row">
                            <div className="col-sm-7 progressAndWelcome">

                                <div id="js_toggleProfileStatus" className="welcomeMessage js_selectModule selectModule profileStatus active" data-module-number="0">
                                    <p className="vx_h2 engagementWelcomeMessage nemo_welcomeMessageHeader">Hi again, {this.props.user.name}</p>
                                    <button id="js_engagementActionTrigger" className="vx_btn vx_btn-medium engagement-actionText vx-btn_toggleProfileStatus js_emTrigger nemo_engagementActionTrigger" aria-controls="js_emSlideDownContainer" name="EM_AcctSetup_Open"     >
                                        <span className="profileStatusText" onClick={this.closeContent}>Get the most out of PayPal</span>
                                        <span className="js_toggleProfile icon icon-small icon-arrow-down-small icon-small_toggleProfile nemo_profileStatusDownArrow" >
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div id="js_engagementActions" className="col-sm-5 engagementActions">
                                <ul className="actionsContainer nemo_actionsContainer">
                                    <li className="actionItem engagement-0-listItem">
                                        <Link to="/useraccount/reqMoney" role="button" className="vx_small-text selectModule nemo_transferSelect js_selectModule" >
                                            <img src={require('./sendMoney.PNG')} className="icon icon-medium " alt="" />
                                            <span>Request money</span>
                                        </Link>
                                    </li>
                                    <li className="actionItem engagement-1-listItem">
                                        <Link to="/useraccount/sendMoney" className="vx_small-text js_selectModule selectModule selectModule_app 	nemo_appSelect"  >
                                            <img src={require('./sendMoney.PNG')} className="icon icon-medium" alt="" />
                                            Send Money
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="engagementMainBar-separator engagementMainBar-separator_hide" />
                    <div id="js_emSlideDownContainer" ref='emailClose' className="emSlideDownContainer module-0 nemo_emSlideDownContainer" >
                        <div id="aria_engagementStatus" className="emModule dimBorderLine js_emModule engagementStatusModule js_engagementStatusModule nemo_engagementStatus active " >
                            <div id="js_BadgeLanding" className="emModuleContent">
                                <div id="profileStateContainer" className="setupbadgeBanner-container js_profileStates nemo_profileStates nemo_badges badgeDisplay">
                                    <div className="setupbadgeBanner-container badgeDisplay js_badgeDisplay js_badges js_badgeChild nemo_profileStates nemo_badges active">
                                        <div className="emailConfirmationIcon-container col-sm-2 col-md-2 col-md-offset-1 col-sm-offset-1">
                                            <div className="emailConfirmation-actionIcon">
                                                <img src={require('./email.PNG')} className="icon icon-email " alt="" />
                                            </div>
                                        </div>
                                        <div className="emailConfirmation-content col-sm-9 col-md-9">
                                            <p className="vx_text-1 emailConfirmation-title">Take a second to confirm your email</p>
                                            <p className="vx_text-3 col-sm-11 col-md-11 emailConfirmation-message">
                                                Once you do, you can receive money from friends around the world. And get paid for the things you sell.
                </p>
                                            <a href="/myaccount/home/confirmEmail" className="vx_btn vx_btn-primary">Confirm Your Email</a>
                                        </div>
                                    </div>
                                </div>
                                <span  className="js_dismiss engagementStatusModuleClose emClose emClose_acctCompletion nemo_emClose">
                                    <span className="icon icon-small icon-close-small"  >
                                    </span>
                                    <span className="speakableText" onClick={this.closeContent}>X</span>
                                </span>
                            </div>
                        </div>
                        <div className="emModule js_emModule transferBannerContainer nemo_EM_SendMoneyBanner" >
                            <div className="emModuleContent">
                                <div className="mpiBannerContainer js_mpiBannerContainer transferBanner">
                                    <div className="row">
                                        <div className="col-xs-6 transferActionColumns">
                                            <a href="/myaccount/transfer/buy" className="nemo_primaryActionButton_transferBuy transferPrimaryActions" >
                                                <span className="icon icon-register engagementAction-icon_transferDesktop"  >
                                                </span>
                                                <span className="transferPrimaryActionContent vx_h3">Pay for goods or services</span></a>
                                            <p className="transferPrimaryActionBody">
                                                <span className="icon icon-shield engagementAction-icon_transfer-shield"  >
                                                </span>Covered by
                                                <a href="/us/webapps/mpp/paypal-safety-and-security" className="transferSecondaryActionText nemo_secondaryAction_transferPurchaseProtection"   >
                                                    PayPal Protection for buyers</a>.<br />No fee for you. The seller pays a fee.
                                                </p>
                                        </div>
                                        <div className="col-xs-6 transferActionColumns">
                                            <a href="/myaccount/transfer/send"  className="nemo_primaryActionButton_transferSend transferPrimaryActions">
                                                <span className="icon icon-send-money engagementAction-icon_transferDesktop"  >
                                                </span>
                                                <span className="transferPrimaryActionContent vx_h3">
                                                    Send money to friends and family
                </span>
                                            </a>
                                            <p className="transferPrimaryActionBody">
                                                No fee when you use bank or balance to send in the U.S.
                </p>
                                        </div>
                                    </div>
                                </div>
                                <span className="js_dismiss emClose nemo_emClose" >
                                    <span className="icon icon-small icon-close-small"  >
                                    </span>
                                    <span className="speakableText">close</span>
                                </span>
                            </div>
                        </div>
                        <div className="emModule  js_emModule nemo_EM_DownloadAppBanner" >
                            <div className="emModuleContent js_emModuleContent">
                                <div className="mpiBannerContainer js_mpiBannerContainer row">
                                    <div className="col-md-5">
                                        <img name="phoneImg" alt="none" className="veniceBanner-foregroundImage" src="https://www.paypalobjects.com/webstatic/wallet/engagement/venice_US_img.png" />
                                    </div>
                                    <div className="mpiBanner mpi-right veniceBanner-container col-md-5">
                                        <div className="mpiTextContainer" >
                                            <h3 className="mpiHeader vx_h2" >Welcome to our New App</h3>
                                            <ul className="veniceBanner-valueList">
                                                <li>Faster access to features</li>
                                                <li>Send money in minutes</li>
                                                <li>Manage your money easily</li>
                                            </ul>
                                            <div className="veniceBanner-appBtnContainer">
                                                <span  className="veniceBanner-appBtn veniceBanner-appBtn_apple"  >
                                                    <span className="accessAid">☃appVenice.downloadAppIOS☃</span>
                                                </span>
                                                <span className="veniceBanner-appBtn veniceBanner-appBtn_android"  >
                                                    <span className="accessAid">☃appVenice.downloadAppAndroid☃</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="js_dismiss emClose nemo_emClose" >
                                    <span className="icon icon-small icon-close-small"  >
                                    </span>
                                    <span className="speakableText">close</span>
                                </span>
                            </div>
                        </div>
                        <div className="emModule  js_emModule nemo_EM_ShopBanner" >
                            <div className="emModuleContent js_emModuleContent">
                                <div className="mpiBannerContainer js_mpiBannerContainer">
                                    <div className="mpiBanner mpi-left">
                                        <div className="mpiTextContainer" >
                                            <h3 className="mpiHeader vx_h2" >Get PayPal exclusive offers</h3>
                                            <p className="mpiBody vx_h4">
                                                These offers are available only for PayPal customers. Get inspired by a large selection from thousands of shops.
                </p>
                                            <a href="/deals" className="vx_btn mpiPrimaryAction js_emPrimaryAction nemo_primaryActionButton_EM_Shop" >Get started</a>
                                        </div>
                                    </div>
                                </div>
                                <span className="js_dismiss emClose nemo_emClose" >
                                    <span className="icon icon-small icon-close-small"  >
                                    </span>
                                    <span className="speakableText">close</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <MainContent />
            </div>


        )
    }
}

const mapStateToProps = (store) => {
    console.log('store', store);

    return {
        user: store.user.user
    }
}


export default connect(mapStateToProps)(Content)