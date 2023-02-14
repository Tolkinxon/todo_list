import React from 'react'

const SignIn = () => {
  return (
    <>    
    <div className='cloud'><span>Todo</span>List</div>
    <div className="sign-up">
      <h1>Sign in</h1>
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
          <p>Email address</p>
          <input type="email" className='email' placeholder='Enter your email address' />
          <p>Password</p>
          <input type="password" className='email' placeholder='Enter your email address' />
          <button className='btn'>Sign In</button>
          <p>
            Forgot password
          </p>
          <div className='line'></div>
          <p >Don't have an account? <span>Sign up</span></p>
          <p className='lastP'>Todolist Support</p>
      </div>
    </div>
    </>

  )
}

export default SignIn
