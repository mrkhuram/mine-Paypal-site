import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import { Route, Router, Switch } from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/home'
import Header from './Components/Home/Header'
import Footer from './Components/Home/Footer'
import Send from './Components/Send/send'
import SendMoney from './Components/Send/Sendmoney/sendMoney'
import Personal from './Components/Personal/personal'
import Request from './Components/Request/Request'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/Signup'
import NextSignUp from './Components/NextSignUp/nextSignUp'
import {Provider} from 'react-redux'
import store from './Components/redux/store/index'
import ReqMoney from './Components/loggedIn/ReqMoney/reqMoney'
// import {startGetUser} from './redux/actions/userAction';
import TransferringMoney from './Components/loggedIn/ReqMoney/sendMoney'
import ReqMoneyFromUser from './Components/loggedIn/ReqMoney/reqMoneyFromUser'
import Wallet from './Components/loggedIn/Wallet/wallet'
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App row">
          <Provider store={store}>

              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <Header />

                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/send" component={Send} />
                      <Route path='/sendMoney' component={SendMoney}/>
                      <Route path='/personal' component={Personal}/>
                      <Route path='/request' component={Request}/>
                      <Route path='/login' component={Login}/>
                      <Route path='/signup' component={SignUp}/>
                      <Route path='/forget/signup' component={SignUp}/>
                      <Route path='/nextSignUp' component={NextSignUp}/>
                      <Route path="/useraccount/nav/request&sendMoney" component={ReqMoney}/>
                      <Route path="/useraccount/sendMoney" component={TransferringMoney}/>
                      <Route path="/useraccount/reqMoney" component={ReqMoneyFromUser}/>
                      <Route path="/useraccount/wallet" component={Wallet}/>



                      
                      
                      
                      <Route path="/" component={Home} />
                      
                    </Switch>

                    <Footer />
              </div>
              
          </Provider>
      
        </div>
      </BrowserRouter>
    
    );
  }
}

export default App;
