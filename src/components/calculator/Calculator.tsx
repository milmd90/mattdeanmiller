import React, { useState } from 'react';
import Config from './Config';
import TabView from './TabView';
import { TabColumn } from '../../helpers/tabs';
import { getTabsFromChordTabArray } from '../../helpers/export';

function Calculator() {
  const [numColumns, setNumColumns] = useState<number>(16);
  const [numRows, setNumRows] = useState<number>(1);
  const [editingRow, setEditingRow] = useState<number | undefined>(0);
  const [showRhythm, toggleShowRhythm] = useState<boolean>(false);
  const [showColors, toggleShowColors] = useState<boolean>(false);

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
  function onChangeRhythm(rowNum: number) {
    return function (columnNum: number) {
      return function (duration: number) {
        console.log({
          rowNum,
          columnNum,
          duration
        })
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
          showRhythm={showRhythm}
          onChangeRhythm={onChangeRhythm(rowNum)}
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
