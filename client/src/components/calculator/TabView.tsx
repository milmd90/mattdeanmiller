import React from 'react';
import { TabValue, tabStrings } from '../../helpers/common';
import Chord from './chord/Chord';
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCircleQuestion } from '@fortawesome/free-regular-svg-icons'


function StartColumn(props: {
  isEditing: boolean,
}) {

  return (
    <div className='start-column'>
      <div className='tab-row'>
        {tabStrings.map((tabString) =>
          <div key={tabString}>
            {tabString} |
          </div>
        )}
      </div>
      {
        props.isEditing &&
        <div className='input-row'>
          <div className='input-row-label'>
            root
            <FontAwesomeIcon 
              data-tooltip-id="root-tooltip"
              icon={faCircleQuestion} 
              size='xs'
            />
            <Tooltip
              id="root-tooltip"
              place="top-start"
              content="Type the root note of your chord."
            />
          </div>
          <div className='input-row-label'>
            type
            <FontAwesomeIcon 
              data-tooltip-id="type-tooltip"
              icon={faCircleQuestion} 
              size='xs'
            />
            <Tooltip
              id="type-tooltip"
              place="top-start"
              content="Type the quality of your chord (ex: minor, maj 7, half dim, etc).
              Default value is major."
            />
          </div>
          <div className='input-row-label'>
            shape
            <FontAwesomeIcon 
              data-tooltip-id="shape-tooltip"
              icon={faCircleQuestion} 
              size='xs'
            />
            <Tooltip
              id="shape-tooltip"
              place="top-start"
              content="Optional. Type the base shape of the chord (eg: C, A, G, E, D)."
            />
          </div>
          <div className='input-row-label'>
            position
            <FontAwesomeIcon 
              data-tooltip-id="position-tooltip"
              icon={faCircleQuestion} 
              size='xs'
            />
            <Tooltip
              id="position-tooltip"
              place="top-start"
              content="Optional. Type the minimum allowable fret position."
            />
          </div>
          <div className='input-row-label'>
            option
            <FontAwesomeIcon 
              data-tooltip-id="option-tooltip"
              icon={faCircleQuestion} 
              size='xs'
            />
            <Tooltip
              id="option-tooltip"
              place="top-start"
              content="Clicking this button cycles through all matching chords."
            />
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
          <FontAwesomeIcon className='icon' icon={faEdit} />
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
