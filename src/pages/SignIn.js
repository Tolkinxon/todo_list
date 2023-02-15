import React from 'react'
import google from '../images/logo_googleg_48dp.svg'
import facebook from '../images/facebook 1.svg'
import apple from '../images/apple 1.svg'
import cloud from '../images/Vector (1).svg'
import checkbox from '../images/Vector (2).svg'

const SignUp = () => {
  return (
    <>
      <div className="clouds">
        <img src={checkbox} alt="checkbox" className="checkbox" />
        <img src={cloud} alt="cloud" className="cloud" />
        <p>
          Todo<span>List</span>
        </p>
      </div>
      <div className="sign-up sign-in">
        <h1>Sign in</h1>
        <ul className="container">
          <li>
            <img src={google} alt="google" />
            <p>Continue with Google</p>
          </li>
          <li>
            <img src={facebook} alt="facebook" />
            <p>Continue with Facebook</p>
          </li>
          <li>
            <img src={apple} alt="apple" />
            <p>Continue with Facebook</p>
          </li>
        </ul>
        <div className="or">
          <div></div>
          <span>OR</span>
          <div></div>
        </div>
        <div className="paragraphs">
          <h3>Email address</h3>
          <input
            type="email"
            className="email in"
            placeholder="Enter your email address"
          />
          <h3>Password</h3>
          <input
            type="password"
            className="email in password"
            placeholder="Enter your password"
          />
          <button className="btn in">Sign in</button>
          <p>Forgot your password?</p>
          <div className="line"></div>
          <p className="lastP">
            Don't have an account? <span>Sign up </span>
          </p>
          <h4 className="last-p">Todolist Support</h4>
        </div>
      </div>
    </>
  )
}

export default SignUp
