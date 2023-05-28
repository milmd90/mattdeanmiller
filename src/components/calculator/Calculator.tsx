import React from 'react';
import Chord from './chord/Chord';
import Label from './Label';

function getColumns(x: number) {
  const arr = []
  for(let i = 0; i < x; i++){
    arr.push(<Chord/>)
  }
  return arr;
}

function Calculator() {
  return (
    <div className="calculator">
      <Label/>
        { getColumns(10) }
      <Chord/>
    </div>
  );
}

export default Calculator;
