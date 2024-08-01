import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleSignInButton from './GoogleSignInButton';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";
import axios from 'axios';

function Signup(){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email' && !value.trim().match(/^([a-zA-Z0-9_\-\]+)@([a-zA-Z\-]+\.)+[a-zA-Z]{2,}$/)) {
      setErrors({ ...errors, email: 'Invalid email format' });
    } else if (name === 'password' && value.length < 8) {
      setErrors({ ...errors, password: 'Password must be at least 8 characters long' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }

    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/signup', { username, email, password })
      .then(result => {
        console.log(result);
        navigate('/Login')
      })
      .catch(err => console.log(err))
  }

  const handleGoogleSignup = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    const userEmail = profile.getEmail();
    const userName = profile.getName();
    // Perform signup action using Google user's email and name
    axios.post('http://localhost:3001/signup', { username: userName, email: userEmail })
      .then(result => {
        console.log(result);
        navigate('/Login')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='Signup-page'>
      <div className="additional-text">
        <h1>Hello!</h1>
        <p>Enter your credentials to Sign Up</p>
      </div>
      <div className="background-image"></div>
      <div className="signup-form">
        <h1>Sign Up!</h1>
        <form onSubmit={handleSubmitForm}> 
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter your name" 
            required
            value={username}
            onChange={handleChange} 
          />
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            required
            value={email}
            onChange={handleChange} 
          />
          <label htmlFor="password">Password:</label>
          <div className="password-input-container"> 
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={handleChange} 
            />
            <button type="button" className="password-toggle-button" onClick={toggleShowPassword}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>} 
          <a href="#">Forget Password?</a>
          <div className="horizontal-or">OR</div>
          <div className="social-login">
            <GoogleOAuthProvider clientId={'your-google-client-id'} onSuccess={handleGoogleSignup}>
              <GoogleSignInButton />
            </GoogleOAuthProvider>
          </div>
          <div className="center-button">
            <button type="submit">Sign up</button>
          </div>
          <p>Already have an account?{' '}<Link to="/Login" style={{ color: 'black', fontWeight: 'bold' }}>Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
