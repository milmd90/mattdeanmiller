import React from 'react';

function Menu(props: {
  downloadTab: () => void,
}) {

  return (
    <div className="menu">
      <button
        onClick={props.downloadTab}
      >
        Export
      </button>
    </div>
  );
}

export default Menu;
