import React, { useState } from 'react';
import Config from '../components/calculator/Config';
import ColorKey from '../components/calculator/ColorKey';
import TabView from '../components/calculator/TabView';
import { TabValue } from '../helpers/common';
import { getTabsFromChordTabArray } from '../helpers/export';

function Tabulator() {
  const [numColumns, setNumColumns] = useState<number>(16);
  const [numRows, setNumRows] = useState<number>(1);
  const [editingRow, setEditingRow] = useState<number | undefined>(0);
  const [showColors, toggleShowColors] = useState<boolean>(true);

  const tabColumns: TabValue[][][] = [];
  function onChange(rowNum: number) {
    return function (columnNum: number) {
      return function (data: TabValue[]) {
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

  function renderTabViews(numRows: number) {
    const views = [];
    for (let rowNum = 0; rowNum < numRows; rowNum++) {
      views.push(
        <TabView
          key={rowNum}
          showColors={showColors}
          numColumns={numColumns}
          isEditing={editingRow === rowNum}
          handleEditClick={() => setEditingRow(editingRow === rowNum ? undefined : rowNum)}
          onChange={onChange(rowNum)}
        />
      )
    }
    return views;
  }

  return (
    <div id="tabulator" className='window'>
      <div id='tab-views' className='container'>
        {renderTabViews(numRows)}
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
