import React from 'react';
import {
  ITabStringValue,
  generateTabs
} from '../../../helpers/tabs';
import {IChordParams} from '../chord/Chord'

function Cell(props: {
  data: ITabStringValue
}): any {
  const {tone, fret} = props.data;
  const className = tone === '' ? '' : `tone-${tone}`;
  return (
    <div className={`fret-number ${className}`}>
      {fret}
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
