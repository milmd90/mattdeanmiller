import React from 'react';
import SetNumChords from './SetNumChords';

function Menu(props: {
  showRhythm: boolean,
  setShowRhythm: React.ChangeEventHandler<HTMLInputElement>,
  showColors: boolean,
  setShowColors: React.ChangeEventHandler<HTMLInputElement>,
  addColumn: () => void,
  removeColumn: () => void,
  downloadTab: () => void,
}) {
  return (
    <div className="menu">
      <h3>Config Options</h3>
      <label>
        <input 
          type="checkbox"
          checked={props.showRhythm}
          onChange={props.setShowRhythm}
        />
        Enable rhythm
      </label>
      <label>
        <input 
          type="checkbox"
          checked={props.showColors}
          onChange={props.setShowColors}
        />
        Enable colors
      </label>
      <SetNumChords
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
