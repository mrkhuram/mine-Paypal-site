import React, { Component } from 'react'
import './banner.css'
export default class Banner extends Component {
    render() {
        return (
            <div>
                <div className='outerBanner2'>
                    <div className='banner2 col-lg-12' >

                        {/* <img src={require('./Images/banner.jpg')} className='img' alt="" /> */}
                        <div className='bannerBlock2 col-lg-10' >
                            <h3 className="bannerHeading2" > The best way to send money online. </h3>
                            <p className="bannerPara2" > PayPal provides a secure way to send money instantly online to just about anywhere in the world. </p>
                            <button className="btnSendMoney2" > Send Money Online </button>
                            <p className="bannerBottom2" > *Sending and receiving funds requires a PayPal account. If recipient doesn't have an account, they can open one easily for free. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
