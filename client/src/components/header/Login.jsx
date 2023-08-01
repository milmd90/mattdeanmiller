import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Login = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="login">
      {Auth.loggedIn() ? (
        <>
          <Link className="" to="/me">
            {Auth.getProfile().data.username}'s profile
          </Link>
          <button className="" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="" to="/login">
            Login
          </Link>
          <Link className="" to="/signup">
            Signup
          </Link>
        </>
      )}
    </div>
  );
};

export default Login;
