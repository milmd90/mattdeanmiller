import React from 'react';
import SetNumChords from './SetNumChords';

function Config(props: {
  showRhythm: boolean,
  toggleShowRhythm: React.ChangeEventHandler<HTMLInputElement>,
  showColors: boolean,
  toggleShowColors: React.ChangeEventHandler<HTMLInputElement>,
  numColumns: number,
  addColumn: () => void,
  removeColumn: () => void,
  numRows: number,
  addRow: () => void,
  removeRow: () => void,
  downloadTab: () => void,
}) {
  return (
    <div id="config">
      <h3>Config Options</h3>
      <div>
        <div id="config-options">
          <div id='colors' className='config-option'>
            <input 
              id='color-checkbox' 
              type="checkbox"
              checked={props.showColors}
              onChange={props.toggleShowColors}
            />
            <label>
              Enable colors
            </label>
          </div>
          <div id='rhythm' className='config-option'>
            <input
              id='rhythm-checkbox' 
              type="checkbox"
              checked={props.showRhythm}
              onChange={props.toggleShowRhythm}
            />
            <label>
              Enable rhythm
            </label>
          </div>
          <SetNumChords
            text='Number of columns'
            number={props.numColumns}
            increment={props.addColumn}
            decrement={props.removeColumn}
          />
          <SetNumChords
            text='Number of rows'
            number={props.numRows}
            increment={props.addRow}
            decrement={props.removeRow}
          />
        </div>
        <button
          id='export'
          onClick={props.downloadTab}
        >
          Export
        </button>
      </div>
    </div>
  );
}

export default Config;
