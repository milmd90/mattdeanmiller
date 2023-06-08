import React from 'react';

function SetNumChords(props: {
  numColumns: number,
  addColumn: () => void
  removeColumn: () => void
}) {
  const {
    addColumn,
    removeColumn
  } = props;

  return (
    <div id="num-columns" className='config-option'>
      <div id="num-columns-buttons">
        <button onClick={removeColumn}>-</button>
        {props.numColumns}
        <button onClick={addColumn}>+</button>
      </div>
      <label>
        Number of columns
      </label>
    </div>
  );
}

export default SetNumChords;