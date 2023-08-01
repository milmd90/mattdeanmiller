import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Login = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div id="login-signup">
      {Auth.loggedIn() ? (
        <>
          <Link className="profile" to="/profile">
            Profile
          </Link>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="login" to="/login">
            Login
          </Link>
          <Link className="signup" to="/signup">
            Signup
          </Link>
        </>
      )}
    </div>
  );
};

export default Login;
