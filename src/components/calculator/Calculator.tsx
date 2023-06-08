import React, {useState} from 'react';
import Config from './Config';
import TabView from './TabView';
import { TabColumn } from '../../helpers/tabs';
import { getTabsFromChordTabArray } from '../../helpers/export';

function Calculator() {
  const [numColumns, setNumColumns] = useState<number>(16);
  const [showRhythm, toggleShowRhythm] = useState<boolean>(false);
  const [showColors, toggleShowColors] = useState<boolean>(false);

  const tabColumns: TabColumn[] = [];
  function onChange(columnNum: number) {
    return function(data: TabColumn) {
      tabColumns[columnNum] = data;
    }
  }
  function downloadTab() {
    getTabsFromChordTabArray(tabColumns);
  }

  return (
    <div className="calculator">
      <TabView 
        showColors={showColors}
        numColumns={numColumns}
        onChange={onChange}
      />
      <Config 
        showRhythm={showRhythm}
        toggleShowRhythm={() => toggleShowRhythm(!showRhythm)}
        showColors={showColors}
        toggleShowColors={() => toggleShowColors(!showColors)}
        numColumns={numColumns}
        addColumn={() => setNumColumns(numColumns+1)}
        removeColumn={() => setNumColumns(numColumns-1)}
        downloadTab={downloadTab} 
      />
    </div>
  );
}

export default Calculator;
