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

export default SetNumChords;