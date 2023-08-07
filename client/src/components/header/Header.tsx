import React from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header(props: {
  title: String,
  onMenuClick: () => void
}) {
  return (
    <div id="header">
      <span id='header-left'>
        <FontAwesomeIcon id='menu-button' className='icon' icon={faBars} size="2xl" 
          onClick={props.onMenuClick}
        />
        <h1>
          <Link to= '/'>
            {props.title}
          </Link>
        </h1>
      </span>
      <span id='header-right'>
        {/* <LoginSignup /> */}
      </span>
    </div>
  );
}

export default Header;
