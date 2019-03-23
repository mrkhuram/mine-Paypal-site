import React, { Component } from 'react'
import './sendMoney.css'
import HeaderOfUser from '../Header'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from 'react-redux';


class SendMoney extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            amount: '',  
            loading: false
        }
    }

    onChangeHandler = e =>{
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value})
        
    }

    onSubmit =(e)=>{
        e.preventDefault();
        // const {email, amount} = this.state;

        this.setState({email: '',
      amount:''})   
    }
  render() {
    const {email, amount, loading} = this.state;
    const isnotValid = email === '' || amount === ''|| loading;
    return (
      <div>
        <HeaderOfUser />
        
        <div className="sendMoneyToUser col-lg-12 col-md-12">
            <h1 className="headingOfSendMoney">Send Money to Friends and Family</h1>
            <p className="paraOfSendMoney">
                Send money to anyone with an email address or mobile number and it will go to their PayPal account. If they don’t have an account, they can create one in seconds, for free.</p>

                <form action="/useraccount/sendMoney/enterAmount" >
                <input type="text" className="emailToSendMone" name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="Email, Mobile Number or Name" />
                <br/>
                <input type="number" className="emailToSendMone" name="amount" value={this.state.amount} onChange={this.onChangeHandler} placeholder="Enter Amount" />
                    <br/><br/>   <Button
                                        onClick={this.onSubmit}
                                        disabled={isnotValid}
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        className="button actionContinue scTrack:unifiedlogin-login-click-next"
                                        // component={Link}
                                        // to='/nextSignUp'
                                        >
                                        {loading
                                            ? <CircularProgress size={20}/>
                                            : <span className="btnToSendMoney">
                                                Next
                                                 
                                                     
                                              
                                            </span>
                                        }
                                    </Button>
                                    </form>
                                    

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


export default connect(mapStateToProps, null)(SendMoney)