import React, { useState } from 'react';
import Config from './Config';
import TabView from './TabView';
import { TabColumn } from '../../helpers/tabs';
import { getTabsFromChordTabArray } from '../../helpers/export';

function Calculator() {
  const [numColumns, setNumColumns] = useState<number>(16);
  const [numRows, setNumRows] = useState<number>(1);
  const [showRhythm, toggleShowRhythm] = useState<boolean>(false);
  const [showColors, toggleShowColors] = useState<boolean>(false);

  const tabColumns: TabColumn[] = [];
  function onChange(columnNum: number) {
    return function (data: TabColumn) {
      tabColumns[columnNum] = data;
    }
  }
  function downloadTab() {
    getTabsFromChordTabArray(tabColumns);
  }

  function renderTabViews(runRows: number) {
    const views = [];
    for (let i = 0; i < runRows; i++) {
      views.push(
        <TabView
          key={i}
          showColors={showColors}
          numColumns={numColumns}
          numRows={numRows}
          onChange={onChange}
        />
      )
    }
    return views;
  }

  return (
    <div id="calculator">
      <div id='tab-views'>
        {renderTabViews(numRows)}
      </div>
      <Config
        showRhythm={showRhythm}
        toggleShowRhythm={() => toggleShowRhythm(!showRhythm)}
        showColors={showColors}
        toggleShowColors={() => toggleShowColors(!showColors)}
        numColumns={numColumns}
        setNumColumns={setNumColumns}
        numRows={numRows}
        setNumRows={setNumRows}
        downloadTab={downloadTab}
      />
    </div>
  );
}

export default Calculator;
