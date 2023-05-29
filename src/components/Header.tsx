import React from 'react';

function Header(props: {
  title: String
}) {
  return (
    <div className="header">
      <h1>
        {props.title}
      </h1>
    </div>
  );
}

export default Header;
