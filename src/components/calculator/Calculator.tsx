import React, {useState} from 'react';
import Menu from './Menu';
import TabView from './TabView';
import { TabColumn } from '../../helpers/tabs';
import { getTabsFromChordTabArray } from '../../helpers/export';

function Calculator() {
  const [numColumns, setNumColumns] = useState<number>(16);

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
        numColumns={numColumns}
        onChange={onChange}
      />
      <Menu 
        downloadTab={downloadTab} 
        addColumn={() => setNumColumns(numColumns+1)}
        removeColumn={() => setNumColumns(numColumns+1)}
      />
    </div>
  );
}

export default Calculator;
