import React, { Component } from 'react'
import HeaderOf from '../loggedIn/Header'
import Content from '../loggedIn/Content'
// import Footer from '../loggedIn/FooterOfUser'
// import FooterOfUser from '../loggedIn/FooterOfUser';
class UserAccount extends Component {
  render() {
    return (
      <div>
        <HeaderOf />
        <Content />
       
      </div>
    )
  }
}

export default UserAccount
