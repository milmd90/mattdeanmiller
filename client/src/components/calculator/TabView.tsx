import React from 'react';
import { IChordTab, TabString, tabStrings } from '../../helpers/common';
import Chord from './chord/Chord';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'


function StartColumn(props: {
  isEditing: boolean,
}) {
  const stringToNote = (tabString: TabString): String => {
    if (tabString === "sixth") return "e";
    if (tabString === "fifth") return "B";
    if (tabString === "fourth") return "G";
    if (tabString === "third") return "D";
    if (tabString === "second") return "A";
    if (tabString === "first") return "E";
    return "";
  }

  return (
    <div className='start-column'>
      <div className='tab-row'>
        {tabStrings.map((tabString) =>
          <div key={`${stringToNote(tabString)}`}>
            {stringToNote(tabString)} |
          </div>
        )}
      </div>
      {
        props.isEditing &&
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
      }
    </div>
  );
}

function EndColumn(props: {
  isEditing: boolean,
  handleEditClick: () => void,
}) {
  return (
    <div className='end-column'>
      <div className="tab-row">
        {tabStrings.map((tabString) =>
          <div className="end-bar" key={tabString}> | </div>
        )}
        <div className='edit' onClick={props.handleEditClick}>
          <FontAwesomeIcon icon={faEdit} />
        </div>
      </div>
    </div>
  );
}

export default function TabView(props: {
  showColors: boolean,
  numColumns: number,
  isEditing: boolean,
  handleEditClick: () => void,
  onChange: (columnNum: number) => (data: IChordTab) => void
}) {
  function renderChords(numColumns: number) {
    const chords = [];
    for (let i = 0; i < numColumns; i++) {
      chords.push(
        <Chord
          key={i}
          isEditing={props.isEditing}
          showColors={props.showColors}
          onChange={props.onChange(i)}
        />
      )
    }
    return chords;
  }

  return (
    <div className='tab-view'>
      <StartColumn
        isEditing={props.isEditing}
      />
      {renderChords(props.numColumns)}
      <EndColumn
        isEditing={props.isEditing}
        handleEditClick={props.handleEditClick}
      />
    </div>
  )
}
