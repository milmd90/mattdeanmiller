import React, {useState} from 'react';
import Menu from './Menu';
import TabView from './TabView';
import { TabColumn } from '../../helpers/tabs';
import { getTabsFromChordTabArray } from '../../helpers/export';

function Calculator() {
  const [numColumns, setNumColumns] = useState<number>(16);
  const [showRhythm, setShowRhythm] = useState<boolean>(false);
  const [showColors, setShowColors] = useState<boolean>(false);

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
      <Menu 
        showRhythm={showRhythm}
        setShowRhythm={() => setShowRhythm(!showRhythm)}
        showColors={showColors}
        setShowColors={() => setShowColors(!showColors)}
        addColumn={() => setNumColumns(numColumns+1)}
        removeColumn={() => setNumColumns(numColumns-1)}
        downloadTab={downloadTab} 
      />
    </div>
  );
}

export default Calculator;
