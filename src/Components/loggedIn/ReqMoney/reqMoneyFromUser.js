import React, { Component } from 'react'
import './sendMoney.css'
import HeaderOfUser from '../Header'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


class ReqMoneyFromUser extends Component {

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
        // console.log({[name]: value});
        
    }

    onClickHandler =()=>{
        
    }
  render() {
    const {email, amount, loading} = this.state;
    const isnotValid = email === '' || amount === ''|| loading;
    return (
      <div>
        <HeaderOfUser />
        
        <div className="sendMoneyToUser col-lg-12 col-md-12">
            <h1 className="headingOfSendMoney">Request Money from Friends and Family</h1>
            <p className="paraOfSendMoney">
            You can request money from anyone with an email address or phone number, even if they don't have a PayPal account.</p>

                <form action="/useraccount/sendMoney/enterAmount" >
                <input type="text" className="emailToSendMone" name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="Email, Mobile Number or Name" />
                <br/>
                <input type="text" className="emailToSendMone" name="amount" value={this.state.amount} onChange={this.onChangeHandler} placeholder="Enter Amount" />
                    <br/><br/>   <Button
                                        onClick={this.onClickHandler}
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

export default ReqMoneyFromUser;
