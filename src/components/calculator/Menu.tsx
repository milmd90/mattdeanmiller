import React from 'react';
import NumChordButtons from './NumChordButtons';

function Menu(props: {
  downloadTab: () => void,
  addColumn: () => void,
  removeColumn: () => void,
}) {

  return (
    <div className="menu">
      <h3>Config Options</h3>
      <label><input type="checkbox"/>Enable colors</label>
        <NumChordButtons
          addColumn={props.addColumn}
          removeColumn={props.removeColumn}
        />
      <button
        onClick={props.downloadTab}
      >
        Export
      </button>
    </div>
  );
}

export default Menu;
