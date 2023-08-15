import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHORDS } from '../../../utils/queries';
import {
  IStringData,
  IChordTab,
  emptyTab,
  tabStrings,
  convertChordsToTabs,
  createChordVariations,
  updateChordsWithPosition,
  sortChordsByLowest,
} from '../../../helpers/common';
import {
  getQualityFromAbbrev
} from '../../../helpers/abbreviations';
import {
  convertPitchToTone
} from '../../../helpers/pitchTones';
import { IChordParams } from './Chord';
import TabDetail from './TabDetail';


function Cell(props: {
  data: IStringData
  showColors: boolean
}): any {
  const { tone, fret } = props.data;
  const className = tone === null || !props.showColors ? '' : `tone-${tone}`;
  const cellValue = fret === null ? '-' : fret;

  return (
    <div className={`fret-number ${className}`}>
      {cellValue}
    </div>
  )
}

function Display(props: {
  data: IChordParams,
  showColors: boolean,
  onChange: (data: IChordTab) => void
}) {
  const {
    root,
    type: abbrev,
    shape,
    position,
    option
  } = props.data;

  const [showDetail, setShowDetail] = useState(false);

  const tone = convertPitchToTone(root);
  const type = getQualityFromAbbrev(abbrev);

  const { loading, data } = useQuery(QUERY_CHORDS, {
    variables: {
      shape,
      type,
    },
  });

  if (loading || !data || !data.chords || data.chords.length === 0 || tone === null) {
    props.onChange(emptyTab);
    return (
      <div className="display">
        <div
          className="tab-row"
        >
          {tabStrings.map((tabString) =>
            <Cell
              key={tabString}
              showColors={props.showColors}
              data={emptyTab[tabString]}
            />
          )}
        </div>
      </div>
    )
  }

  let tabArray: IChordTab[] = convertChordsToTabs(data.chords, root);
  tabArray = createChordVariations(tabArray);
  tabArray = updateChordsWithPosition(tabArray, position);
  tabArray = sortChordsByLowest(tabArray);

  const index: number = option % tabArray.length;
  const renderTab = tabArray[index];
  props.onChange(renderTab);

  const setDetailPosition = (e: any) => {
    const details = Array.from(document.getElementsByClassName('tab-detail') as HTMLCollectionOf<HTMLElement>)
    details.forEach((detail) => {
      detail.style.left = e.pageX + 20 + 'px';
      detail.style.top = e.pageY + 20 + 'px';
    });
  }
  document.addEventListener('mousemove', setDetailPosition);

  return (
    <div className="display">
      <div
        className="tab-row"
        onMouseOver={(e) => {
          setShowDetail(true);
          setDetailPosition(e);
        }}
        onMouseOut={() => setShowDetail(false)}
      >
        {tabStrings.map((tabString) =>
          <Cell
            key={tabString}
            showColors={props.showColors}
            data={renderTab[tabString]}
          />
        )}
      </div>
      <TabDetail
        tab={renderTab}
        hide={!showDetail}
      />
    </div>
  );
}

export default Display;
