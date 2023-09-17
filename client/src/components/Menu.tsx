import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';


function MenuDropdown(props: {
  open: boolean,
  onClick: () => void,
  onExpand: () => void,
}) {
  const getSubItems = () => {
    if (!props.open) return null;
    return <>
      <HashLink to='/music-theory#sound' className='menu-item category-item' onClick={props.onClick}>
        Sound
      </HashLink>
      <HashLink to='/music-theory#pitch' className='menu-item category-item' onClick={props.onClick}>
        Pitch
      </HashLink>
      <HashLink to='/music-theory#notes' className='menu-item category-item' onClick={props.onClick}>
        Notes
      </HashLink>
      <HashLink to='/music-theory#octaves' className='menu-item category-item' onClick={props.onClick}>
        Octaves
      </HashLink>
      <HashLink to='/music-theory#intervals' className='menu-item category-item' onClick={props.onClick}>
        Intervals
      </HashLink>
      <HashLink to='/music-theory#harmonic-equivalence' className='menu-item category-item' onClick={props.onClick}>
        Harmonic Equivalence
      </HashLink>
      <HashLink to='/music-theory#chromatic-scale' className='menu-item category-item' onClick={props.onClick}>
        Chromatic Sale
      </HashLink>
      <HashLink to='/music-theory#major-scale' className='menu-item category-item' onClick={props.onClick}>
        Major Scale
      </HashLink>
      <HashLink to='/music-theory#key' className='menu-item category-item' onClick={props.onClick}>
        Key
      </HashLink>
      <HashLink to='/music-theory#sheet-music' className='menu-item category-item' onClick={props.onClick}>
        Sheet Music
      </HashLink>
      <HashLink to='/music-theory#circle-of-fifths' className='menu-item category-item' onClick={props.onClick}>
        Circle of Fifths
      </HashLink>
      <HashLink to='/music-theory#notes' className='menu-item category-item' onClick={props.onClick}>
        Minor Scale
      </HashLink>
      <HashLink to='/music-theory#chords' className='menu-item category-item' onClick={props.onClick}>
        Chords
      </HashLink>
    </>
  }

  return (
    <div id='music-theory' className='menu-group'>
      <div className='menu-item menu-category'>
        <Link to='/music-theory' onClick={props.onClick}>
          Music Theory
        </Link>
        {props.open ?
          <FontAwesomeIcon id='menu-dropdown' className='icon' icon={faCaretUp} onClick={props.onExpand} /> :
          <FontAwesomeIcon id='menu-dropdown' className='icon' icon={faCaretDown} onClick={props.onExpand} />}
      </div>
      {getSubItems()}
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
        Guitar Scale Patterns
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
