import React, {useState} from 'react';
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
      <Link to='/music-theory#a' className='menu-item category-item' onClick={props.onClick}>
        A
      </Link>
      <Link to='/music-theory#b' className='menu-item category-item' onClick={props.onClick}>
        B
      </Link>
      <Link to='/music-theory#c' className='menu-item category-item' onClick={props.onClick}>
        C
      </Link>
      <Link to='/music-theory#d' className='menu-item category-item' onClick={props.onClick}>
        D
      </Link>
      <Link to='/music-theory#e' className='menu-item category-item' onClick={props.onClick}>
        E
      </Link>
      <Link to='/music-theory#f' className='menu-item category-item' onClick={props.onClick}>
        F
      </Link>
    </>
  }

  return (
    <div id='music-theory' className='menu-group'>
      <div className='menu-item menu-category'>
        <Link to='/music-theory' onClick={props.onClick}>
          Music Theory
        </Link>
        <FontAwesomeIcon id='menu-dropdown' icon={faCaretDown} onClick={props.onExpand} />
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
      <Link to='/' id='menu-home'  className='menu-item' onClick={props.onClick}>
        Home
      </Link>
      <Link to='/blog' id='menu-blog' className='menu-item' onClick={props.onClick}>
        Blog
      </Link>
      <Link to='/tabulator' id='menu-tabulator' className='menu-item' onClick={props.onClick}>
        Tabulator
      </Link>
      <MenuDropdown
        open={dropdownOpen}
        onClick={props.onClick}
        onExpand={() => {setDropdownOpen(!dropdownOpen)}}
      />
    </div>
  );
}

export default Menu;
