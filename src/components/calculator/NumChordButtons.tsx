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
      <button onClick={removeColumn}>-</button>
      <button onClick={addColumn}>+</button>
    </div>
  );
}

export default NumChordButtons;