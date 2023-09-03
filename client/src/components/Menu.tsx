import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


function MenuDropdown(props: {
  open: boolean,
  onClick: () => void,
  onExpand: () => void,
}) {
  const getSubItems = () => {
    if (!props.open) return null;
    return <>
      <Link to='/music-theory#sound' className='menu-item category-item' onClick={props.onClick}>
        Sound
      </Link>
      <Link to='/music-theory#pitch' className='menu-item category-item' onClick={props.onClick}>
        Pitch
      </Link>
      <Link to='/music-theory#notes' className='menu-item category-item' onClick={props.onClick}>
        Notes
      </Link>
      <Link to='/music-theory#octaves' className='menu-item category-item' onClick={props.onClick}>
        Octaves
      </Link>
    </>
  }

  return (
    <div id='music-theory' className='menu-group'>
      <div className='menu-item menu-category'>
        <Link to='/music-theory' onClick={props.onClick}>
          Music Theory
        </Link>
        {/* <FontAwesomeIcon id='menu-dropdown' className='icon' icon={faCaretDown} onClick={props.onExpand} /> */}
      </div>
      {/* {getSubItems()} */}
    </div>
  );
}

function Menu(props: {
  open: boolean,
  onClick: () => void,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div id="menu" className={`${props.open ? 'show' : 'hide'}`}>
      <Link to='/' id='menu-home' className='menu-item' onClick={props.onClick}>
        Home
      </Link>
      {/* <Link to='/blog' id='menu-blog' className='menu-item' onClick={props.onClick}>
        Blog
      </Link> */}
      <Link to='/tabulator' id='menu-tabulator' className='menu-item' onClick={props.onClick}>
        Tabulator
      </Link>
      <Link to='/scales' id='menu-scales' className='menu-item' onClick={props.onClick}>
        Scales
      </Link>
      <MenuDropdown
        open={dropdownOpen}
        onClick={props.onClick}
        onExpand={() => { setDropdownOpen(!dropdownOpen) }}
      />
    </div>
  );
}

export default Menu;
