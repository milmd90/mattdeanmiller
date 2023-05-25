import React from 'react';

function Display(props: any) {
  const {chord} = props;
  return (
    <div className="display">
      <div>
      {chord.chord}
      </div>
    </div>
  );
}

export default Display;
