import React, { Component } from 'react'
import './signup.css'
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import { LOGIN } from '../constants';
import { connect } from 'react-redux'
import { startCreateUser, startEmailVerification } from '../redux/actions/userAction';
import data from './pk.json';
import classNames from 'classnames'
import _ from 'lodash'
import { isEmail } from './emailReg'
import { Link } from 'react-router-dom'
class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: null,
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      address: '',
      city: ' Faisalabad',
      cities: [],
      province: ' Punjab',
      checkbox: '',
      emailError: '',
      passwordError: '',
      emailVarified: '',
      loading: false,
      error: {
        name: null,
        email: null,
        password: null,
        address: null,
        confirmPassword: null,
        checkbox: null,
        address: null,

      }



    };

    this.formValidation = this.formValidation.bind(this)
  }

  formValidation(fieldsToValidate = [], callback = () => { }) {


    const allFields = {

      name: {
        message: "Your name is required.",
        doValidate: () => {
          const value = _.trim(_.get(this.state, 'name', ""));


          if (value.length > 0) {
            return true;
          }

          return false;
        }
      },

      email: {
        message: "Email is not correct",
        doValidate: () => {

          const value = _.get(this.state, 'email', "");

          if (value.length > 0 && isEmail(value)) {

            return true;
          }
          return false;
        }
      },

      password: {
        message: "Password shoud has more than 3 characters.",
        doValidate: () => {


          const value = _.get(this.state, 'password', '');


          if (value && value.length > 3) {

            return true;
          }

          return false;

        }
      },

      confirmPassword: {
        message: "Password does not match.",
        doValidate: () => {


          const passwordValue = _.get(this.state, 'password');
          const value = _.get(this.state, 'confirmPassword', '');


          if (passwordValue === value) {
            return true;
          }

          return false;

        }
      },
      address: {
        message: "Address should be added",
        doValidate: () => {

          const value = _.get(this.state, 'address', "");

          if (value.length > 0) {

            return true;
          }
          return false;
        }
      }

    };
    let errors = this.state.error;

    _.each(fieldsToValidate, (field) => {

      const fieldValidate = _.get(allFields, field);
      if (fieldValidate) {

        errors[field] = null;

        const isFieldValid = fieldValidate.doValidate();

        if (isFieldValid === false) {
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

        if (err) {
          isValid = false;

        }
      });

      callback(isValid);

    })



  }



  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form is valid");

    const fieldNeedToValidate = ['name', 'email', 'password', 'confirmPassword', 'address'];

    this.formValidation(fieldNeedToValidate, (isValid) => {
      console.log(("form is validate", isValid));

      const { name, email, password, confirmpassword, address, city, province } = this.state;

      let userData = {
        name,
        email,
        password,
        confirmpassword,
        address,
        city,
        province,
      }
      this.props.changeState(userData);

      this.setState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        address: '',

        province: ' Punjab',
        checkbox: '',
      })


    });

  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.emailVerification === 'email already in use') {
      this.setState({ emailError: "Email already in use, please use another email" });

    }
    else {
      this.setState({ emailError: '' });
    }

    if (nextProps.userAccount === 'Account has been created!') {
      this.props.history.push(LOGIN);
    }

  }

  onSelectHandler = (e) => {
    let cities = []
    cities = data.filter((item) => item.admin === e.target.value);
    this.setState({
      province: e.target.value,
      cities
    })
  }

  onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });

  }


  render() {
    const { cities, error, emailError } = this.state;

    return (
      <div className='signUpIndex'>
        <div className="signUpFormOuter">
          <div className="headerWrapperOuter">
            <div className="headerWrapper">
              <h1 className="vx_text-2 ">See for yourself why millions of people love PayPal - Sign up for free</h1>
            </div>
          </div>
          <form className="signUpForm" onSubmit={this.onSubmitHandler} component={Link} to='/login' method="POST">
            <input type="text" placeholder="Full Name"
              className={classNames('firstName f1', { 'error': _.get(error, 'name') })}
              value={this.state.name}
              onChange={this.onChangeHandler}
              name="name"

            />
            <br />
            <input type="text" placeholder="Your email"
              className={classNames('email f1', { 'error': _.get(error, 'email') })}
              value={this.state.email}
              onChange={this.onChangeHandler}
              onBlur={this.onBlurEmailHandler}
              FormHelperTextProps={{ error: true }}
              helperText={emailError}
              name="email"

            />
            <br />
            <input type="text"
              value={this.state.address}
              onChange={this.onChangeHandler}
              name="address"

              className={classNames('address f1', { 'error': _.get(error, 'address') })}
              placeholder="Address"
            // className='address f1' 
            />

            <br />
            <select name="province"
              onChange={this.onSelectHandler}
              // className={classNames('province f1', { 'error': _.get(error, 'province') })}

              className='province f1'
            >
              <option selected disabled value="none">
                Choose your province
                      </option>
              <option value="Sindh">
                Sindh
                      </option>
              <option value="Punjab">
                Punjab
                      </option>
              <option value="Khyber Pakhtunkhwa">
                Khyber Pakhtunkhwa
                      </option>
              <option value="Islāmābād">
                Islāmābād
                      </option>
              <option value="Balochistān">
                Balochistān
                      </option>
              <option value="Gilgit-Baltistan">
                Gilgit-Baltistan
                      </option>
              <option value="Federally Administered Tribal Areas">
                Federally Administered Tribal Areas
                      </option>
              <option value="Federally Administered Tribal Areas">
                Azad Kashmir
                      </option>
            </select>
            <br />

            <select name="city"
              onChange={this.onChangeHandler}
              // className='city f1'
              className={classNames('city f1', { 'error': _.get(error, 'city') })}

            >
              <option selected disabled value="none">
                Choose your City
                      </option>
              {cities.map((item, i) => {
                return (
                  <option key={i} value={item.city}>
                    {item.city}
                  </option>)
              })}
            </select>
            <br />
            <input type="password"
              placeholder="Create your password"
              className={classNames('password f1', { 'error': _.get(error, 'password') })}

              value={this.state.password}
              onChange={this.onChangeHandler}
              onBlur={this.onBlurPasswordHandler}
              name="password"

            />
            <br />
            <input type="password" placeholder="Confirm your password"

              className={classNames('re-password f1', { 'error': _.get(error, 'confirmPassword') })}

              value={this.state.confirmPassword}
              onChange={this.onChangeHandler}
              name="confirmPassword"
              onBlur={this.onBlurConfirmPasswordHanlder}

            />


            <br />
            <Checkbox

              color="primary"
              value={this.state.check}
              onChange={this.onChangeHandler}
              name="check"
            />
            <label >Stay logged in for faster checkout</label>
            <br />

            <Fab
              variant="extended"
              size="medium"
              color="primary"
              type="submit"



            >
              Submit
                        </Fab>

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
const mapDispatchToProps = (dispatch) => {
  return ({
    changeState: (userData) => {
      dispatch(startCreateUser(userData))
    },
    checkEmail: (userData) => {
      dispatch(startEmailVerification(userData))
    },

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)