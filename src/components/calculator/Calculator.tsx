import React, {useState} from 'react';
import Header from '../Header';
import Menu from './Menu';
import Label from './Label';
import Chord from './chord/Chord';
import NumColumnButtons from './SetNumColumns';

function Calculator() {
  const [numColumns, setNumColumns] = useState<number>(10);

  const tab: any = [];
  function onChange(position: number) {
    return function(data: any) {
      tab[position] = data;
    }
  }
  function downloadTab() {
    console.log({tab})
  }

  function renderChords(numColumns: number) {
    const chords = []
    for (let i = 0; i < numColumns; i++) {
      chords.push(
        <Chord 
          key={i}
          onChange={onChange(i)}
        />
      )
    }
    return chords;
  }

  return (
    <div className="calculator">
      <Header title="Tab Calculator" />
      <Menu downloadTab={downloadTab} />
      <div className='body'>
        <Label/>
        { renderChords(numColumns) }
        <NumColumnButtons
          removeColumn={() => setNumColumns(numColumns-1)}
          addColumn={() => setNumColumns(numColumns+1)}
        />
      </div>
    </div>
  );
}

export default Calculator;
