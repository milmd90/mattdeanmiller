import React from 'react';
import {
  IChordParams,
  TabCell,
  generateTabs
} from '../../../helpers/tabs'

function Cell(props: {
  data: TabCell
}): any {
  return (
    <div className={`tone-${props.data.tone}`}>
      {props.data.fret}
    </div>
  )
}

function Display(props: {
  data: IChordParams;
}) {

  const tab = generateTabs(props.data);

  return (
    <div className="display tab-column">
      <Cell data={tab['e']} />
      <Cell data={tab['B']} />
      <Cell data={tab['G']} />
      <Cell data={tab['D']} />
      <Cell data={tab['A']} />
      <Cell data={tab['E']} />
    </div>
  );
}

export default Display;
