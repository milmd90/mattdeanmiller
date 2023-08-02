import React from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from './LoginSignup';

function Header(props: {
  title: String
}) {
  return (
    <div id="header">
      <h1>
        <Link to='/'>
          {props.title}
        </Link>
      </h1>
      <LoginSignup />
    </div>
  );
}

export default Header;
