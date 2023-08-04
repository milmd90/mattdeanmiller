import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props: {
  open: boolean,
  onClick: () => void, 
}) {
  if (!props.open) return null;

  return (
    <div id="menu">
      <Link to='/' id='menu-home'  className='menu-item' onClick={() => props.onClick()}>
        Home
      </Link>
      <Link to='/blog' id='menu-blog' className='menu-item' onClick={() => props.onClick()}>
        Blog
      </Link>
      <Link to='/tabulator' id='menu-tabulator' className='menu-item' onClick={() => props.onClick()}>
        Tabulator
      </Link>
      <div id='menu-theory' className='menu-group'>
        <Link to='/music-theory'  className='menu-item menu-category' onClick={() => props.onClick()}>
          Music Theory
        </Link>
        <Link to='/' className='menu-item category-item' onClick={() => props.onClick()}>
          A
        </Link>
      </div>
    </div>
  );
}

export default Menu;
