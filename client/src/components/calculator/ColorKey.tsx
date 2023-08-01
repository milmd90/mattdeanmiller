import React from 'react';

const definedTones = [{
  degree: "root",
  offset: 0,
}, {
  degree: "minor second",
  offset: 1,
}, {
  degree: "major second",
  offset: 2,
}, {
  degree: "minor third",
  offset: 3,
}, {
  degree: "major third",
  offset: 4,
}, {
  degree: "perfect forth",
  offset: 5,
}, {
  degree: "tritone",
  offset: 6,
}, {
  degree: "perfect fifth",
  offset: 7,
}, {
  degree: "minor sixth",
  offset: 8,
}, {
  degree: "major sixth",
  offset: 9,
}, {
  degree: "minor seventh",
  offset: 10,
}, {
  degree: "major seventh",
  offset: 11,
}];

function ColorKey(props: {
  showColors: boolean,
}) {
  if (!props.showColors) return null;

  return (
    <div id="color-key" className='container'>
      <h3>Color Key</h3>
      {definedTones.map(notes =>
        <div key={`${notes.offset}`}>
          <span className={`color-key-sample tone-${notes.offset}`}>&nbsp;</span>
          <span>&nbsp;-&nbsp;</span>
          <span>{notes.degree}</span>
        </div>
      )}
    </div >
  );
}

export default ColorKey;
