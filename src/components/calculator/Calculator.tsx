import React, {useState} from 'react';
import Menu from './Menu';
import Label from './Label';
import Chord from './chord/Chord';
import NumChordButtons from './NumChordButtons';
import { TabColumn } from '../../helpers/tabs';
import { getTabsFromChordTabArray } from '../../helpers/export';

function Calculator() {
  const [numColumns, setNumColumns] = useState<number>(10);

  const tabColumns: TabColumn[] = [];
  function onChange(position: number) {
    return function(data: TabColumn) {
      tabColumns[position] = data;
    }
  }
  function downloadTab() {
    getTabsFromChordTabArray(tabColumns);
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
      <Menu downloadTab={downloadTab} />
      <div className='body'>
        <Label/>
        { renderChords(numColumns) }
        <NumChordButtons
          removeColumn={() => setNumColumns(numColumns-1)}
          addColumn={() => setNumColumns(numColumns+1)}
        />
      </div>
    </div>
  );
}

export default Calculator;
