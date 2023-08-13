import React, { useState } from 'react';
import Config from '../components/calculator/Config';
import ColorKey from '../components/calculator/ColorKey';
import Tab from '../components/calculator/Tab';
import { IChordTab } from '../helpers/common';
import { getTabsFromChordTabArray } from '../helpers/export';

function Tabulator() {
  const [numColumns, setNumColumns] = useState<number>(16);
  const [numRows, setNumRows] = useState<number>(1);
  const [showColors, toggleShowColors] = useState<boolean>(true);

  const tabColumns: IChordTab[][] = [];
  function onChange(rowNum: number) {
    return function (columnNum: number) {
      return function (data: IChordTab) {
        if (!tabColumns[rowNum]) {
          tabColumns[rowNum] = [];
        }
        tabColumns[rowNum][columnNum] = data;
      }
    }
  }
  function downloadTab() {
    getTabsFromChordTabArray(tabColumns);
  }

  return (
    <div id="tabulator" className=''>
      <div id='tab-mobile' className='container'>
        <Tab
          onChange={onChange}
          showColors={showColors}
          numRows={1}
          numColumns={1}
        />
      </div>
      <div id='tab' className='container'>
        <Tab
          onChange={onChange}
          showColors={showColors}
          numRows={numRows}
          numColumns={numColumns}
        />
      </div>
      <div id='sidebar' className='column'>
        <Config
          showColors={showColors}
          toggleShowColors={() => toggleShowColors(!showColors)}
          numColumns={numColumns}
          setNumColumns={setNumColumns}
          numRows={numRows}
          setNumRows={setNumRows}
          downloadTab={downloadTab}
        />
        <ColorKey
          showColors={showColors}
        />
      </div>
    </div>
  );
}

export default Tabulator;
