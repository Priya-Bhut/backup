import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doLogin } from './action';
import logo from '../../images/brilworks-logo.png';
import withRouter from '../WrapperComponents/withRouter';

const formValidation = ({ email, password }, type) => {
  const errors = { isError: false };
  if (type === 'email') {
    if (email.trim() === '') {
      errors.email = 'enter your email id';
      errors.isError = true;
    }
  } else if (type === 'password') {
    if (password.trim() === '') {
      errors.password = 'Password field is empty';
      errors.isError = true;
    }
  }
  return errors;
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {},
      type: 'password',
      loading: false,
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target?.name]: e.target.value }, () => {
      const err = formValidation(this.state, e.target?.name);
      this.setState({ error: err });
    });
  };

  doLogin = async (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    await this.props
      .doLogin({
        email,
        password,
      })
      .then(async (response) => {
        if (response && !response.errorMessage && !response.error) {
          this.setState({ loading: false });
          this.props?.handleAlert('Login Successfull', 'success');
          this.props?.history('/organisations');
        } else {
          this.setState({ loading: false });
          this.props?.handleAlert(
            response?.errorMessage || response?.error?.message || 'Something went wrong',
            'error',
          );
        }
      })
      .catch((error) => {
        this.props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };

  handleClick = () => {
    this.setState({ type: !this.state.type });
  };
  render() {
    const { email, password, error, type, loading } = this.state;
    return (
      <div className='main-container'>
        <div className='left-view'>
          <div className='left-center-view'>
            <img className='login-logo' alt='logo' src={logo} />
            <span>Brilworks OKR</span>
          </div>
        </div>
        <div className='right-view'>
          <div className='new-user'>
            <p>
              <span className='grey-text-link'>New user?</span>
              <Link to='/signup' className='link-to-formPage'>
                SIGN UP
              </Link>
            </p>
          </div>
          <div className='form-container'>
            <h3>Sign in to BRIL OKR</h3>
            <hr />
            <Form className='login-form'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>

                <Form.Control
                  type='email'
                  placeholder='name@example.com'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  isInvalid={!!error?.email}
                />
                <Form.Control.Feedback type='invalid'>{error?.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3 login-password-field' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={type ? 'password' : 'text'}
                  name='password'
                  value={password}
                  placeholder='Password'
                  onChange={this.handleChange}
                  isInvalid={!!error?.password}
                />
                <span className='show-password' onClick={this.handleClick}>
                  {type ? <i className='far fa-eye'></i> : <i className='far fa-eye-slash'></i>}
                </span>
                <Form.Control.Feedback type='invalid'>{error?.password}</Form.Control.Feedback>
              </Form.Group>
              <Link to='/forgot' className='float-end'>
                Forgot Password?
              </Link>
              <Button
                className='signUpSubmitButton w-100 m-0 mt-4 mb-3 brilCrmButton'
                type='submit'
                onClick={this.doLogin}
              >
                {loading ? (
                  <div className='dot-type-loader-small singInLoader' />
                ) : (
                  <h5 className='login-btn m-0 p-0 '>SIGN IN</h5>
                )}
              </Button>
            </Form>
          </div>
          <div className='copyright-text'>
            <p>© 2021, Brilworks Software LLP. All Right Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  doLogin,
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
