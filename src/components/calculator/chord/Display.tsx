import React, {useState} from 'react';
import {
  ITabStringValue,
  tabStrings,
  generateTabs,
  isValidTab
} from '../../../helpers/tabs';
import { IChordParams } from './Chord';
import TabDetail from './TabDetail';

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
  const isValid = isValidTab(tab);
  const [showDetail, setShowDetail] = useState(false);

  const setDetailPosition = (e: any) => {
    const details = Array.from(document.getElementsByClassName('tab-detail') as HTMLCollectionOf<HTMLElement>)
    details.forEach((detail) => {
      detail.style.left = e.pageX + 20 + 'px';
      detail.style.top = e.pageY + 20 + 'px';
    });
  }

  document.addEventListener('mousemove', setDetailPosition);

  return (
    <div className="display tab-row">
      <div
        onMouseOver={(e) => {
          setShowDetail(true);
          setDetailPosition(e);
        }}
        onMouseOut={() => setShowDetail(false)}
      >
        {tabStrings.map((tabString) => 
          <Cell data={tab[tabString]} />
        )}
      </div>
      {isValid && <TabDetail 
        tab={tab}
        hide={!showDetail}
      />}
    </div>
  );
}

export default Display;
