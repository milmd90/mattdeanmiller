import React from 'react';

function SetNumChords(props: {
  text: string,
  number: number,
  increment: () => void
  decrement: () => void
}) {
  return (
    <div id="num-columns" className='config-option'>
      <div id="num-columns-buttons" className='config-option-control'>
        <button onClick={props.decrement}>-</button>
        <div id='num-column-display'>
          {props.number}
        </div>
        <button onClick={props.increment}>+</button>
      </div>
      <label className='config-option-label'>
        {props.text}
      </label>
    </div>
  );
}

export default function Config(props: {
  showColors: boolean,
  toggleShowColors: React.ChangeEventHandler<HTMLInputElement>,
  numColumns: number,
  setNumColumns: (numColumns: number) => void,
  numRows: number,
  setNumRows: (numRows: number) => void,
  downloadTab: () => void,
}) {
  return (
    <div id="config" className='container'>
      <h3>Config Options</h3>
      <div>
        <div id="config-options">
          <div id='colors' className='config-option'>
            <div className='config-option-control'>
              <input
                id='color-checkbox'
                type="checkbox"
                checked={props.showColors}
                onChange={props.toggleShowColors}
              />
            </div>
            <label className='config-option-label'>
              Enable colors
            </label>
          </div>
          <SetNumChords
            text='Number of rows'
            number={props.numRows}
            increment={() => props.setNumRows(props.numRows + 1)}
            decrement={() => props.setNumRows(props.numRows - 1)}
          />
          <SetNumChords
            text='Number of columns'
            number={props.numColumns}
            increment={() => props.setNumColumns(props.numColumns + 1)}
            decrement={() => props.setNumColumns(props.numColumns - 1)}
          />
        </div>
      </div>
      <button
        id='export'
        onClick={props.downloadTab}
      >
        Export
      </button>
    </div>
  );
}
