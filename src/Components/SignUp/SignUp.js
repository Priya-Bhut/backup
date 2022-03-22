import React, { Component } from 'react';
import logo from '../../images/brilworks-logo.png';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { doSignUp } from './action';
import { connect } from 'react-redux';
import withRouter from '../WrapperComponents/withRouter';
import withUseFormHook from '../WrapperComponents/ReactHookForm';
import { emailValidRegex, passwordRegex } from '../constant/Regex';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        organisationName: '',
        userName: '',
      },
      type: true,
      loading: false,
      buttonLoading: false,
    };
  }
  handleChange = (e) => {
    const { form } = this.state;
    form[e.target?.name] = e.target?.value;
    this.setState({ form });
  };
  doSignUp = async (e) => {
    const { email, password, firstName, lastName, organisationName, userName } = this.state.form;
    const { errors } = this.props;
    e.preventDefault();
    if (
      !(
        errors &&
        Object.keys(errors).length === 0 &&
        Object.getPrototypeOf(errors) === Object.prototype &&
        !(!firstName || !lastName || !email || !password)
      )
    ) {
      this.props?.handleAlert('Please enter required fields.', 'error');
    } else {
      this.setState({ buttonLoading: true });
      await this.props
        .doSignUp({
          email,
          password,
          firstName,
          lastName,
          organisationName,
          userName,
        })
        .then((response) => {
          this.setState({ loading: true });
          if (response && !response.errorMessage && !response.error) {
            this.setState({ loading: false });

            this.props?.handleAlert('Login Successfull');
            this.props?.history('/organisations');
            this.setState({ buttonLoading: false });
          } else {
            this.setState({ loading: false });
            this.props?.handleAlert(
              response?.errorMessage || response?.error?.message || 'Please fill correct data in the fields',
              'error',
            );
            this.setState({ buttonLoading: false });
          }
        })
        .catch((error) => {
          this.props?.handleAlert(error?.message || 'Something went wrong', 'error');
          this.setState({ buttonLoading: false });
        });
    }
  };

  handleClick = () => {
    const { type } = this.state;
    this.setState({ type: !type });
  };

  render() {
    const { email, password, firstName, lastName, organisationName, userName } = this.state.form;
    const { errors, register } = this.props;
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
              <span className='grey-text-link'>Already have an Account?</span>
              <Link to='/login' className='link-to-formPage'>
                SIGN IN
              </Link>
            </p>
          </div>
          <div className='form-container'>
            <h3>Create an account</h3>
            <hr />
            <Form className=''>
              <Row>
                <Col>
                  <Form.Group className='mb-3' controlId='formFirstName'>
                    <Form.Label>Your Name</Form.Label>

                    <Form.Control
                      type='text'
                      className={{
                        'is-invalid': errors?.firstName,
                      }}
                      name='firstName'
                      value={firstName}
                      {...register('firstName', {
                        required: 'First name is required',

                        onChange: this.handleChange,
                      })}
                      placeholder='First Name'
                    />
                    {errors?.firstName && <div className='invalid-feedback'>{errors?.firstName?.message}</div>}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='mb-3' controlId='formLastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type='text'
                      className={{
                        'is-invalid': errors?.lastName,
                      }}
                      placeholder='Last Name'
                      name='lastName'
                      value={lastName}
                      {...register('lastName', {
                        required: 'Last name is required',

                        onChange: this.handleChange,
                      })}
                    />
                    {errors?.lastName && <div className='invalid-feedback'>{errors?.lastName?.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className='mb-3' controlId='formUserName'>
                <Form.Label>User Name</Form.Label>

                <Form.Control
                  type='text'
                  className={{
                    'is-invalid': errors?.userName,
                  }}
                  value={userName}
                  {...register('userName', {
                    required: 'Username is required',
                    onChange: this.handleChange,
                  })}
                  placeholder='User Name'
                  name='userName'
                />
                {errors?.userName && <div className='invalid-feedback'>{errors?.userName?.message}</div>}
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  value={email}
                  className={{
                    'is-invalid': errors?.email,
                  }}
                  {...register('email', {
                    required: 'Please enter your email address',
                    pattern: {
                      value: emailValidRegex,
                      message: 'Please enter valid email address',
                    },
                    onChange: this.handleChange,
                  })}
                  placeholder='Enter your Email Address'
                />
                {errors?.email && <div className='invalid-feedback'>{errors?.email?.message}</div>}
              </Form.Group>
              <Form.Group className='mb-3 login-password-field' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={this.state.type ? 'password' : 'text'}
                  className={{
                    'is-invalid': errors?.password,
                  }}
                  placeholder='Password'
                  name='password'
                  value={password}
                  {...register('password', {
                    required: 'Please enter your password',
                    pattern: {
                      value: passwordRegex,
                      message:
                        'Password should contain at least one special character, one uppercase letter, one lowercase letter and a number',
                    },
                    onChange: this.handleChange,
                  })}
                />
                <span className='show-password' onClick={this.handleClick}>
                  {this.state.type ? <i className='far fa-eye'></i> : <i className='far fa-eye-slash'></i>}
                </span>
                {errors?.password && <div className='invalid-feedback'>{errors?.password?.message}</div>}
              </Form.Group>
              <Form.Group className='mb-3' controlId='formOrganisationName'>
                <Form.Label>Organisation Name</Form.Label>

                <Form.Control
                  type='text'
                  className={{
                    'is-invalid': errors?.organisationName,
                  }}
                  value={organisationName}
                  {...register('organisationName', {
                    required: 'This field is required',
                    minLength: {
                      value: 4,
                      message: '4 Characters Should Be Min. Length',
                    },
                    onChange: this.handleChange,
                  })}
                  placeholder='organisation Name'
                  name='organisationName'
                />
                {errors?.organisationName && (
                  <div className='invalid-feedback'>{errors?.organisationName?.message}</div>
                )}
              </Form.Group>
              <div className='buttonContainer'>
                <Button
                  className='signup-submit-button brilCrmButton'
                  disabled={
                    this.state.buttonLoading ||
                    (this.state.loading &&
                      !(
                        errors &&
                        Object.keys(errors).length === 0 &&
                        Object.getPrototypeOf(errors) === Object.prototype &&
                        !(!firstName || !lastName || !password)
                      ))
                  }
                  type='submit'
                  onClick={this.doSignUp}
                >
                  {this.state.buttonLoading ? <div className='dot-type-loader-small singInLoader' /> : `SIGN UP`}
                </Button>
              </div>
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
  doSignUp,
};
const mapStateToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withUseFormHook(SignUp)));
