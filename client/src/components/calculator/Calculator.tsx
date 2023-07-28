import React, { useState } from 'react';
import Config from './Config';
import ColorKey from './ColorKey';
import TabView from './TabView';
import { TabColumn } from '../../utils/tabs';
import { getTabsFromChordTabArray } from '../../utils/export';

function Calculator() {
  const [numColumns, setNumColumns] = useState<number>(16);
  const [numRows, setNumRows] = useState<number>(1);
  const [editingRow, setEditingRow] = useState<number | undefined>(0);
  const [showColors, toggleShowColors] = useState<boolean>(true);

  const tabColumns: TabColumn[][] = [];
  function onChange(rowNum: number) {
    return function (columnNum: number) {
      return function (data: TabColumn) {
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
    <div id="calculator">
      <div id='tab-views'>
        {renderTabViews(numRows)}
      </div>
      <div id='sidebar'>
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

export default Calculator;
