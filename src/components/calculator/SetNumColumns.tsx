import React from 'react';
import {
  tabStrings
} from '../../helpers/tabs';

function SetNumColumns(props: {
  removeColumn: () => void
  addColumn: () => void
}) {
  const {
    removeColumn,
    addColumn
  } = props;
  return (

    <div className="set-num-columns">
      <div className="tab-row">
        {tabStrings.map((tabString) => 
          <div> | </div>
        )}
      </div>
      <div className="input-row">
        <button onClick={addColumn}>+</button>
        <button onClick={removeColumn}>-</button>
      </div>
    </div>
  );
}

export default SetNumColumns;