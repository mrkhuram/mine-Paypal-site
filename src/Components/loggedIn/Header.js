import React, { Component } from 'react'
import './Header.css'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import {startLogoutUser} from '../redux/actions/userAction';
import { connect } from 'react-redux';

class HeaderOfLoggedUser extends Component {

  notification = ()=>{ 
    $(this.refs.notificationPopUP).slideToggle();
    
  }

  logout =()=>{
    this.props.startLogoutUser();
}

  render() {
    return (
      <div>
        <div className="col-lg-12 col-md-12 col-xs-12">
          <div className="vx_globalNav-main globalNav-main js_globalNavView js_ppLogo" role="banner">
            <div className="vx_globalNav-container">
            <Link  to="/nextSignUp" id="header-ppLogo" name="header-logo" className="vx_globalNav-brand_desktop" pa-marked="1">
              <img src={require('./paypal.png')} className="vx_globalNav-brand_desktop" alt=""/>
            <span className="vx_a11yText">Summary</span></Link>
              <div className="vx_globalNav-secondaryNav_mobile">
                <div className="vx_globalNav-listItem_mobileLogout">
                  <Link  to="/signout" id="header-logout_mobile" name="header-logout_mobile" className="vx_globalNav-link_mobileLogout">Log Out</Link>
                </div>
              
              </div>
              <div className="vx_globalNav-navContainer">
                <nav className="vx_globalNav-nav" role="navigation">
                  <ul className="vx_globalNav-list">
                    <li className="vx_isActive">
                      <Link  to="/nextSignUp" id="header-summary" name="header-summary" className="vx_globalNav-links js_summary" >Summary</Link>
                    </li>
                    
                    <li className="">
                      <Link  to="/useraccount/nav/request&sendMoney" target="_self" id="header-transfer" name="header-transfer" className="vx_globalNav-links js_sendMoney" pa-marked="1">
                      Send &amp; Request
                      </Link>
                    </li>
                    <li className="">
                      <Link  to="/useraccount/wallet" target="_self" id="header-wallet" name="header-wallet" className="vx_globalNav-links js_wallet" pa-marked="1">Wallet</Link>
                    </li>
                   
                  </ul>
                  <ul className="vx_globalNav-list_secondary">
                    
                    
                    <li className="vx_globalNav-listItem_logout">
                      <Link  to="/signout" id="header-logout" name="header-logout" className="vx_globalNav-link_logout js_logout" >Log Out</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
          </div >
        </div >
      </div >
    )
  }
}
const mapStateToProps = (store) => {
  console.log('store', store);

  return {
      user: store.user.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return ({
      startLogoutUser: (userData)=>{
          dispatch(startLogoutUser(userData))
      },
     
      
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderOfLoggedUser)
