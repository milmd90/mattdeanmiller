import React from 'react';
import { TabColumn } from '../../helpers/tabs';
import Chord from './chord/Chord';
import { tabStrings } from '../../helpers/tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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
  onChange: (columnNum: number) => (data: TabColumn) => void
  onDragEnd: (result: any) => void
}) {
  function renderChords(numColumns: number) {
    const chords = [];
    for (let i = 0; i < numColumns; i++) {
      chords.push(
        <Draggable key={i} draggableId={i} index={i}>
          <Chord
            key={i}
            isEditing={props.isEditing}
            showColors={props.showColors}
            onChange={props.onChange(i)}
          />
        </Draggable>
      )
    }
    return chords;
  }

  return (
    <div className='tab-view'>
      <StartColumn
        isEditing={props.isEditing}
      />
      <DragDropContext onDragEnd={props.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {renderChords(props.numColumns)}
        </Droppable>
      </DragDropContext>
      <EndColumn
        isEditing={props.isEditing}
        handleEditClick={props.handleEditClick}
      />
    </div>
  )
}
