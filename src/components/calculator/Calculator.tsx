import React, {useState} from 'react';
import Header from '../Header';
import Label from './Label';
import Chord from './chord/Chord';
import NumColumnButtons from './SetNumColumns';


function getColumns(numColumns: number) {
  const arr = []
  for(let i = 0; i < numColumns; i++){
    arr.push(<Chord key={i}/>)
  }
  return arr;
}

function Calculator() {
  const [numColumns, setNumColumns] = useState<number>(10);

  return (
    <div className="calculator">
      <Header title="Tab Calculator" />
      <div className='body'>
        <Label/>
        { getColumns(numColumns) }
        <NumColumnButtons
          removeColumn={() => setNumColumns(numColumns-1)}
          addColumn={() => setNumColumns(numColumns+1)}
        />
      </div>
    </div>
  );
}

export default Calculator;
