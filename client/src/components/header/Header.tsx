import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

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
      <Login />
    </div>
  );
}

export default Header;
