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
        <img src={checkbox} alt="checkbox" className="checkbox1" />
        <img src={cloud} alt="cloud" className="cloud1" />
        <p>
          Todo<span>List</span>
        </p>
      </div>
      <div className="sign-up">
        <h1>Sign up</h1>
        <ul>
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
            className="email"
            placeholder="Enter your email address"
          />
          <button className="btn">Sign up with Email</button>
          <p>
            By continuing with Google, Apple, or Email, you agree to Todoist's
            <span> Terms of Service</span> and <span>Privancy Policy</span>
          </p>
          <div className="line"></div>
          <p className="lastP">
            Already signed up?
            <span> Go to sign in</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp
