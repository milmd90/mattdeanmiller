import React from 'react';

function NumChordButtons(props: {
  removeColumn: () => void
  addColumn: () => void
}) {
  const {
    removeColumn,
    addColumn
  } = props;
  return (

    <div className="set-num-columns">
      <button onClick={addColumn}>+</button>
      <button onClick={removeColumn}>-</button>
    </div>
  );
}

export default NumChordButtons;