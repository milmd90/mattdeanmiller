import React from 'react';
import {
  IChordParams,
  ITabStringValue,
  generateTabs
} from '../../../helpers/tabs'

function Cell(props: {
  data: ITabStringValue
}): any {
  const tone = props.data.tone
  const className = tone === '' ? '' : `tone-${props.data.tone}`;
  return (
    <div className={`fret-number ${className}`}>
      {props.data.fret}
    </div>
  )
}

function Display(props: {
  data: IChordParams;
}) {

  const tab = generateTabs(props.data);

  return (
    <div className="display tab-row">
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
