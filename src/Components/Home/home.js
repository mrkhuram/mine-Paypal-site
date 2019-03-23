import React, { Component } from 'react'
import './home.css'
import { connect } from 'react-redux';
import { startGetUser } from '../redux/actions/userAction';
import Carousel from 'react-bootstrap/Carousel'



class Home extends Component {
    componentDidMount() {
        this.props.startGetUser();
        console.log('user is not logged in ');

    }


    render() {
        return (
            <div>

                <div className="content">
                
                    <Carousel className="carousel">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('./Images/coffeeLeft.jpg')}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('./Images/padRight.jpg')}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                    </Carousel>
                        
                
                    <div className="row ">
                        <div className="sendMoney col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className='blockOfMoney '>
                                <p className="headingMoney">Send money to friends and family.</p>
                                <p className='paraMoney container col-xs-12'>It's free to send money to friends and family in the U.S. when you use your bank account or Paypal balance.*</p>
                                <button type="button" className="btn btn-outline-primary btnSend">Send Money Now</button>
                                <p className="fundsGo">*Funds go quickly into their PayPal account. If they don't have one, they can sign up for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="surprisedOuter col-lg-12 col-xs-12">
                            <h2 className="surprisedText">You might be surprised with how many online stores accept Paypal.</h2>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="midContent col-lg-12">
                            <div className="imgMid">
                                <img src={require('./Images/mid.png')} className="" alt="" />
                            </div>
                            <h2 className='col-lg-12 col-md-12 col-xs-12 col-sm-12 shopText'>Shop 19 million online stores and counting.</h2>
                            <div className='row container-fluid shopBox'>
                                <div className='col-lg-4 col-xs-12'>
                                    <div className='leftBox'>
                                        <h3 className="shopHeadingLeft">
                                            Shop your favorite brands.
                                        </h3>
                                        <p className="shopLeftText">PayPal is accepted where you shop - on over 75% of online merchants, from big brands to boutique sites.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12 col-xs-12 col-sm-12 '>
                                    <div className=' midBox'>
                                        <h3 className="shopHeadingMid">
                                            Who shops the world? You.
                                        </h3>
                                        <p className="shopMidText">with PayPal, you can shop online stories in 200+ markets around the world so it's all right at your fingertips.</p>
                                    </div>

                                </div>
                                <div className='col-lg-4 col-md-12 col-xs-12 col-sm-12 '>
                                    <div className='rightBox '>
                                        <h3 className="shopHeadingRight">
                                            Buy with confidence.
                                        </h3>
                                        <p className="shopRightText">There's a reason why over 200 million people trust PayPal: it's easy and secure with benefits like Return on Shipping on Us<sup>1</sup> and Purchase Protection.<sup>2</sup></p>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 aboutProduct">
                                    {/* <Link>Shop now with PayPal at your favorite stories.</Link> */}
                                    <p href="#" >Shop now with PayPal at your favorite stories.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className='col-lg-12 col-xs-12 signUpBox'>
                            <div className="signUpBlock">
                                <h2 className="signUpHeading col-xs-12">Make the most of your money.</h2>
                                <button className="signUpButton ">Sign Up for Free.</button>
                            </div>

                        </div>
                    </div>
                    <div className="row row-fluid disclaimer-panel">
                        <div className="col-lg-12 col-xs-12 col-sm-12 containerCentered">
                            <div className="span12">
                                <p className="legal-notes2"><sup>1</sup>Limitations apply.
                                This program is open only to eligible U.S. PayPal account owners.
                                Once the service is activated, participants may receive up to 12 refunds
                                (up to $30 per refund request) per calendar year (January 1 – December 31)
                                on qualifying returns of tangible items returned in accordance with seller’s return policy.
                                Other limitations apply.
                                <br /><br />
                                    <sup>2</sup>See more about Purcase Protection terms and limitations.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
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
const mapDispatchToProps = (dispatch) => {
    return ({
        startGetUser: (userData) => {
            dispatch(startGetUser(userData))
        },


    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)