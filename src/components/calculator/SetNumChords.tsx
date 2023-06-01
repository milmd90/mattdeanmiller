import React from 'react';

function SetNumChords(props: {
  addColumn: () => void
  removeColumn: () => void
}) {
  const {
    addColumn,
    removeColumn
  } = props;

  return (
    <div className="set-num-columns">
      <button onClick={removeColumn}>-</button>
      <button onClick={addColumn}>+</button>
    </div>
  );
}

export default SetNumChords;