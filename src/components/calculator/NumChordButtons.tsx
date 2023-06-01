import React from 'react';

function NumChordButtons(props: {
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

export default NumChordButtons;