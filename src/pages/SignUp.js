import React from 'react'

const SignUp = () => {
  return (
    <>
      {/* <div className='cloud'><span>Todo</span>List</div> */}
      <div className="sign-up">
        <h1>Sign up</h1>
        <ul className="container">
          <li>
            <p>Continue with Google</p>
          </li>
          <li>
            <p>Continue with Facebook</p>
          </li>
          <li>
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
            Already signed up? <span>Go to sign in </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp
