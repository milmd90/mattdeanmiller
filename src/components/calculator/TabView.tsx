import React from 'react';
import { TabColumn } from '../../helpers/tabs';
import Chord from './chord/Chord';
import { tabStrings } from '../../helpers/tabs';


function StartColumn() {
  return (
    <div className='start-column'>
      <div className='tab-row'>
        {tabStrings.map((tabString) => 
          <div key={tabString}>
            {tabString} |
          </div>
        )}
      </div>
      <div className='input-row'>
        <div>
          root
        </div>
        <div>
          type
        </div>
        <div>
          shape
        </div>
        <div>
          position
        </div>
        <div>
          option
        </div>
      </div>
    </div>
  );
}

function EndColumn() {
  return (
    <div className="tab-row">
      {tabStrings.map((tabString) => 
        <div className="end-bar" key={tabString}> | </div>
      )}
    </div>
  );
}

export default function TabView(props: {
  showColors: boolean,
  numColumns: number,
  onChange: (columnNum: number) => (data: TabColumn) => void
}) {
  function renderChords(numColumns: number) {
    const chords = [];
    for (let i = 0; i < numColumns; i++) {
      chords.push(
        <Chord 
          key={i}
          showColors={props.showColors}
          onChange={props.onChange(i)}
        />
      )
    }
    return chords;
  }

  return (
    <div className='tab-view'>
      <StartColumn/>
      { renderChords(props.numColumns) }
      <EndColumn />
    </div>
  )
}
