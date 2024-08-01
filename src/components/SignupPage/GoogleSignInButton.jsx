import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const clientId = '369160555863-64rqvufirogr91olcrsh1527h3147utk.apps.googleusercontent.com'; // Replace with your actual client ID

const GoogleSignInButton = () => {
  const handleSuccess = (response) => {
    console.log('Logged in:', response.profileObj);
    // Send user data (e.g., profileObj.email) to your backend here
    // You can also redirect the user to a different page after successful login
  };

  const handleError = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={handleSuccess}
      onError={handleError}
      render={(renderProps) => (
        <button className="google-signin-button" onClick={renderProps.onClick}>
          <FontAwesomeIcon icon={faGoogle} />
          {renderProps.children}
        </button>
      )}
    />
  );
};

export default GoogleSignInButton;
